import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageResetPasswordComponent } from './page-reset-password/page-reset-password.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageProfileEditComponent } from './page-profile-edit/page-profile-edit.component';
import { PageIndexComponent } from './page-index/page-index.component';

const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: 'profile', component: PageProfileComponent },
  { path: 'reset-password', component: PageResetPasswordComponent },
  { path: 'profile-edit', component: PageProfileEditComponent },
  { path: '', component: PageIndexComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
