import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import {
  ItaUserTimeSettingsComponent
} from './commons/ita-user-time-settings/ita-user-time-settings.component';
import { ItaUserLanguageComponent } from './commons/ita-user-language/ita-user-language.component';

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
    path: 'UserTimeSettings',
    component: ItaUserTimeSettingsComponent
  },
  {
    path: 'UserLanguage',
    component: ItaUserLanguageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
