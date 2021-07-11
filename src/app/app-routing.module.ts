import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { AmilComponent } from './User/amil/amil.component';
import { BerandaAdminComponent } from './User/admin/beranda-admin/beranda-admin.component';
import { ProfileComponent } from './User/amil/profile/profile.component';
import { PresensiMasukComponent } from './User/amil/presensi/presensi-masuk/presensi-masuk.component';
import { PresensiPulangComponent } from './User/amil/presensi/presensi-pulang/presensi-pulang.component';
import { DataPresensiComponent } from './User/amil/presensi/data-presensi/data-presensi.component';

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
    path : 'amil',
    component : AmilComponent,
    children :[
    {
      path : 'profile',
      component : ProfileComponent,
    },  
    {
      path : 'presensi-masuk',
      component : PresensiMasukComponent,
    },
    {
      path : 'presensi-pulang',
      component : PresensiPulangComponent,
    },
    {
      path : 'data-presensi',
      component : DataPresensiComponent,
    },
]
},
  {
    path : 'beranda-admin',
    component : BerandaAdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [AmilComponent, ProfileComponent,]
