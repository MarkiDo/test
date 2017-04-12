import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { WidgetComponent } from './dashboard//widget/widget.component';
import { FooterComponent } from './commons/footer/footer.component';
import { ItaUserSettingsComponent } from './commons/ita-user-settings/ita-user-settings.component';
import { ItaUserTimeSettingsComponent } from './commons/ita-user-time-settings/ita-user-time-settings.component';
import { ItaUserLanguageComponent } from './commons/ita-user-language/ita-user-language.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdministrationComponent,
    DashboardComponent,
    WidgetComponent,
    FooterComponent,
    ItaUserSettingsComponent,
    ItaUserTimeSettingsComponent,
    ItaUserLanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }