import { ProfileState } from './profile.reducer';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './profile.action';
import { UserProfiles } from 'libs/shared/src/lib/modals/userProfile';

export const PROFILE_FEATURE_KEY = 'profile';

export interface ProfileState {
  profileLoading: boolean;
  profileLoaded: boolean;
  profileError?: any;
  profiles: UserProfiles[];
}

export const adapter: EntityAdapter<UserProfiles> = createEntityAdapter<
  UserProfiles
>({
  selectId: (profile: UserProfiles) => profile.userId
});

export const initialState: ProfileState = adapter.getInitialState({
  profileLoading: false,
  profileLoaded: false,
  profiles: []
});

const _profileReducer = createReducer(
  initialState,
  on(actions.loadProfiles, state => state),
  on(actions.loadProfilesSuccess, (state, { payload }) => {
    return { ...state, profiles: payload };
  })
);
export function profileReducer(state: ProfileState, action: Action) {
  return _profileReducer(state, action);
}
