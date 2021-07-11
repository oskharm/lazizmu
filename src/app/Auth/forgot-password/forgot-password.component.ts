import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from  "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public Auth: AngularFireAuth,
    public router: Router

  ) { }

  ngOnInit(): void {
  }
  
  email:any;
  forgot()
  {
    this.Auth.sendPasswordResetEmail(this.email).then(res=>{
      alert('Tautan untuk pembaruan kata sandi berhasil terkirim melalui email Anda');
      this.router.navigate(['/login']);
    }).catch(error=>{
      alert('Gagal');
    })
  }

}
