import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { billHomeComponent } from './bill-home/bill-home.component';

import {
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';
import { AboutComponent } from './about/about.component';
import { StoreModule } from '@ngrx/store';
import {
  PROFILE_FEATURE_KEY,
  profileReducer
} from 'libs/profile-page/data-access/src/lib/+state/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileFacade } from 'libs/profile-page/data-access/src';
import { BillServiceService } from 'libs/profile-page/data-access/bill-service.service';
import { ProfileEffects } from 'libs/profile-page/data-access/src/lib/+state/profile.effects';
@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    StoreModule.forFeature(PROFILE_FEATURE_KEY, profileReducer),
    EffectsModule.forFeature([ProfileEffects])
  ],
  providers: [ProfileFacade, BillServiceService],
  declarations: [
    // SearchEngineComponent,
    billHomeComponent,
    AboutComponent,
    ProfileListComponent
  ],
  exports: [
    // SearchEngineComponent,
    billHomeComponent,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    AboutComponent,
    StoreModule,
    ProfileListComponent
  ]
})
export class uiModule {}
