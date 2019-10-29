import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileFacade } from 'libs/ui/data-access/src';

@Component({
  selector: 'bill-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  dataSource$: Observable<any[]>;

  constructor(private profileFacade: ProfileFacade) {}

  ngOnInit() {
    this.dataSource$ = this.profileFacade.allProfile$;
  }
}
