import { ProfileFacade } from './../../../../data-access/src/lib/+state/profile.facade';

import { UserProfiles } from 'libs/shared/src/lib/modals/userProfile';
import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { BillServiceService } from 'libs/profile-page/data-access/bill-service.service';
import { ProfileState } from 'libs/profile-page/data-access/src/lib/+state/profile.reducer';

@Component({
  selector: 'bill-bill-home',
  templateUrl: './bill-home.component.html',
  styleUrls: ['./bill-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class billHomeComponent implements OnDestroy, OnInit {
  public searchForm: FormGroup;
  loading = false;
  // userProfiles: Observable<UserProfiles[]>;

  constructor(
    private fb: FormBuilder,
    private profileFacade: ProfileFacade,
    private billServiceService: BillServiceService,
    private snackBar: MatSnackBar,
    private store: Store<ProfileState>
  ) {
    this.createForm();
    this.userProfiles$ = store.pipe(select('profile'));
  }

  ngOnInit(): void {
    this.profileSubscription = this.userProfiles$
      .pipe(
        map(x => {
          this.profileList = x.profiles;
        })
      )
      .subscribe();
    this.profileFacade.loadProfileList();
    this.profileFacade.allProfile$.subscribe();
  }
  userProfiles$: Observable<ProfileState>;
  profileSubscription: Subscription;
  profileList: UserProfiles[];

  private createForm(): void {
    this.searchForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      displayname: ['', [Validators.required]],
      description: ['', [Validators.required]],
      department: ['', [Validators.required]],
      team: ['', [Validators.required]]
    });
  }

  async submitHandler() {
    this.loading = true;
    const form = this.searchForm.value;
    try {
      this.AddProfile(form);
      this.billServiceService.save(form).subscribe(resp => {
        this.snackBar.open('Saved!', '', {
          duration: 2000
        });
        return;
      });
    } catch (err) {
      this.snackBar.open('Error!', '', {
        duration: 2000
      });
      console.error(err);
    }
    this.loading = false;
  }

  AddProfile(form: any) {
    let profile: UserProfiles = {
      email: form.email,
      firstName: form.firstname,
      lastName: form.lastname,
      displayName: form.displayname,
      description: form.description,
      department: form.department,
      team: form.team
    };
    this.profileFacade.createProfileSingle(profile);
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }
}
