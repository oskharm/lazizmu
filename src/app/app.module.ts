import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Auth/login/login.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { AmilComponent } from './User/amil/amil.component';
import { BerandaAdminComponent } from './User/admin/beranda-admin/beranda-admin.component';
import { ProfileComponent, DialogEdit} from './User/amil/profile/profile.component';
import { PresensiMasukComponent, DialogTambahData } from './User/amil/presensi/presensi-masuk/presensi-masuk.component';
import { PresensiPulangComponent, DialogTambah } from './User/amil/presensi/presensi-pulang/presensi-pulang.component';
import { DataPresensiComponent } from './User/amil/presensi/data-presensi/data-presensi.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';``
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';


import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyCdbHPwdRjEL3bY7WTrl-bQY1zp-QLiG2M",
  authDomain: "simpeglazizmu.firebaseapp.com",
  projectId: "simpeglazizmu",
  storageBucket: "simpeglazizmu.appspot.com",
  messagingSenderId: "1085000206978",
  appId: "1:1085000206978:web:9c5ffe5230838eb05d029b",
  measurementId: "G-MJY6JWL71S"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AmilComponent,
    BerandaAdminComponent,
    ProfileComponent,
    PresensiMasukComponent,
    PresensiPulangComponent,
    DataPresensiComponent,
    DialogEdit,
    DialogTambah,
    DialogTambahData,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatSliderModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, 
    MatMenuModule,
    ScrollingModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
