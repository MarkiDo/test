import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import {
  ItaUserTimeSettingsComponent
} from './commons/ita-user-time-settings/ita-user-time-settings.component';
import { ItaUserLanguageComponent } from './commons/ita-user-language/ita-user-language.component';
import { ReportingComponent } from './administration/reporting/reporting.component';
import { UsersRolesComponent } from './administration/users-roles/users-roles.component';
import { FilteringComponent } from './administration/filtering/filtering.component';
const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent,
    children: [
    {
      path: '',
      redirectTo: 'usersroles', pathMatch: 'full'
    },
    {
      path: 'reporting',
      component: ReportingComponent
    },
    {
      path: 'usersroles',
      component: UsersRolesComponent
    },
    {
      path: 'filtering',
      component: FilteringComponent
    }
    ]
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
