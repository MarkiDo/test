import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { ServiceConfComponent } from './service-conf/service-conf.component';
import { AdministrationComponent } from './administration/administration.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiceConfComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule.forRoot(),
    MaterialModule,
    RouterModule.forRoot([
      {
        path: 'serviceconf',
        component: ServiceConfComponent
      },
      {
        path: 'administration',
        component: AdministrationComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
