import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProfileEffects } from './+state/profile.effects';
import { ProfileFacade } from './+state/Profile.facade';
import {
  profileReducer,
  PROFILE_FEATURE_KEY
} from '../../../data-access/src/lib/+state/profile.reducer';
import { BillServiceService } from '../../../../ui/src/lib/bill-service.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PROFILE_FEATURE_KEY, profileReducer),
    EffectsModule.forFeature([ProfileEffects])
  ],
  providers: [ProfileFacade, BillServiceService]
})
export class ProfileDataAccessModule {}
