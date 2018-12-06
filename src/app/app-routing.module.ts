import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageIndexComponent } from './page-index/page-index.component';

const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: '', component: PageIndexComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
