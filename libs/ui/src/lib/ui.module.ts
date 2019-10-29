import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SearchEngineComponent } from './search-engine/search-engine.component';
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
import { BillServiceService } from './bill-service.service';
import { ProfileFacade } from 'libs/ui/data-access/src';
import {
  PROFILE_FEATURE_KEY,
  profileReducer
} from 'libs/ui/data-access/src/lib/+state/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from 'libs/ui/data-access/src/lib/+state/profile.effects';
import { ProfileListComponent } from './profile-list/profile-list.component';
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
