import { createAction, props, union } from '@ngrx/store';
import { UserProfiles } from 'libs/shared/src/lib/modals/userProfile';

export const loadProfiles = createAction('[Profile] Load Profiles');
export const loadProfilesSuccess = createAction(
  '[Profiles] Load Profiles Success',
  props<{ payload: UserProfiles[] }>()
);

export const loadProfilesFailure = createAction(
  '[Profiles] Load Profiles Failure',
  props<{ error: any }>()
);
export const createProfileSingle = createAction(
  '[Admin] Create UserProfiles',
  props<{ userProfiles: UserProfiles }>()
);

export const createProfileSingleFail = createAction(
  '[Admin] Create UserProfiles Fail',
  props<{}>()
);

export const clearSelected = createAction(
  '[Admin] Clear Selected UserProfiles'
);

const all = union({
  loadProfiles,
  loadProfilesSuccess,
  loadProfilesFailure,
  createProfileSingle,
  createProfileSingleFail,
  clearSelected
});

export type PUnion = typeof all;
