import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent
  },
  {
    path:'UserTimeSettings',
    component: ItaUserTimeSettingsComponent
  },
  {
    path:'UserLanguage',
    component: ItaUserLanguageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);