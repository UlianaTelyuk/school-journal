import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { Page404Component } from './page404/page404.component';
import { PageResetPasswordComponent } from './page-reset-password/page-reset-password.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageProfileEditComponent } from './page-profile-edit/page-profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    Page404Component,
    PageResetPasswordComponent,
    PageIndexComponent,
    PageProfileComponent,
    PageProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
