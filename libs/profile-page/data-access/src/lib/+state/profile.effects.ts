import { UserProfiles } from 'libs/shared/src/lib/modals/userProfile';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap, tap, switchMap } from 'rxjs/operators';
import { BillServiceService } from '../../../bill-service.service';
import {
  loadProfiles,
  loadProfilesSuccess,
  loadProfilesFailure,
  createProfileSingle
} from './profile.action';

@Injectable()
export class ProfileEffects {
  loadProfileAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProfiles.type),
      mergeMap(action =>
        this.billServiceService.getProfiles().pipe(
          map((userProfiles: UserProfiles[]) => {
            return loadProfilesSuccess({ payload: userProfiles });
          }),
          catchError(error => {
            return of(loadProfilesFailure(error));
          })
        )
      )
    )
  );

  createProfileSingle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProfileSingle.type),
      mergeMap(form => {
        return this.billServiceService.save(form).pipe(
          map(_ => {
            return loadProfiles();
          }),
          catchError(error => of(loadProfilesFailure(error)))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private billServiceService: BillServiceService
  ) {}
}
