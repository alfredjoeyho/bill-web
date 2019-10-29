import { ProfileState } from './profile.reducer';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as actions from './profile.action';
import { ProfileQuery } from './profile.selectors';
import { UserProfiles } from 'libs/shared/src/lib/modals/userProfile';

@Injectable()
export class ProfileFacade {
  allProfile$ = this.store.pipe(select(ProfileQuery.getProfileItems));

  constructor(private store: Store<ProfileState>) {}

  loadProfileList() {
    this.store.dispatch(actions.loadProfiles());
  }
  createProfileSingle(userProfiles: UserProfiles) {
    this.store.dispatch(actions.createProfileSingle({ userProfiles }));
  }
  clearSelectedProfile() {
    this.store.dispatch(actions.clearSelected());
  }
}
