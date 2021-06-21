import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { BerandaAmilComponent } from './User/amil/beranda-amil/beranda-amil.component';

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
    path : 'forgot-password',
    component : ForgotPasswordComponent,
  },
  {
    path : 'beranda-amil',
    component : BerandaAmilComponent,
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe:  redirectUnauthorizedToLogin}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
