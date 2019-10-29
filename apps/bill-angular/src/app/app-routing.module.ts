import { billHomeComponent } from 'libs/profile-page/feature-shell/src/lib/bill-home/bill-home.component';
import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { AboutComponent } from 'libs/profile-page/feature-shell/src/lib/about/about.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: billHomeComponent },
  { path: 'aboutus', component: AboutComponent },
  {
    path: 'moreabout',
    component: billHomeComponent,
    resolve: {
      url: 'externalUrlRedirectResolver'
    },
    data: {
      externalUrl: 'http://google.com'
    }
  },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [MatToolbarModule, RouterModule.forRoot(routes)],
  exports: [MatToolbarModule, RouterModule],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ]
})
export class AppRoutingModule {}
