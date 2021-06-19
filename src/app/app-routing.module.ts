import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { AmilComponent } from './User//amil/amil.component';

import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
    
  },
  {
    path : 'forgotpassword',
    component : ForgotPasswordComponent,
  },
  {
    path : 'amil',
    component : AmilComponent,
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe:  redirectUnauthorizedToLogin}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
