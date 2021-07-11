import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import {ViewEncapsulation} from '@angular/core';
import "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
  hide = true;
  email: string = "";
  password: string = "";

  constructor(
    public  Auth:  AngularFireAuth, 
    public  router:  Router,) { }

  ngOnInit(): void {
  }

  data:any={};
  login() {
    this.Auth.signInWithEmailAndPassword(this.email, this.password).then(res => {
      this.router.navigate(['/amil']);
    }).catch(error => {
      alert('Email atau password salah');
    })
  }


 }