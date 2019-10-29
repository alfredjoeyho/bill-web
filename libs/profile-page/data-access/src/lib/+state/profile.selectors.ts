import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState, PROFILE_FEATURE_KEY, adapter } from './profile.reducer';
const getProfileState = createFeatureSelector<ProfileState>(
  PROFILE_FEATURE_KEY
);

const getProfileItems = createSelector(
  getProfileState,
  (state: ProfileState) => state.profiles
);

export const ProfileQuery = {
  getProfileItems
};
