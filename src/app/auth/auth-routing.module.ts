import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppRouteNames } from '../shared/routes';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: AppRouteNames.Login, component: LoginComponent },
  { path: AppRouteNames.Register, component: SignupComponent },
  {
    path: '',
    redirectTo: AppRouteNames.Login,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
