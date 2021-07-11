import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from  "@angular/fire/auth";
import "firebase/auth";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-amil',
  templateUrl: './amil.component.html',
  styleUrls: ['./amil.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AmilComponent implements OnInit {

  Dataamil: any = [];
  timestamp: any;
  loading: boolean = false;

  constructor(
    public db: AngularFirestore,
    public  router:  Router,
    public  Auth:  AngularFireAuth,
  ) { }

  ngOnInit(){
    this.getDataAmil();
  }

  getDataAmil(){
    this.db.collection('amil').valueChanges({idField: 'id'}).subscribe(res=>{
    this.Dataamil = res;
    console.log(res);
    })
  }
  logout(){
    this.Auth.signOut()
    localStorage.removeItem('user')
    this.router.navigate(['/login']);
  }

  hapus(rowID: any) {
    var r = confirm("Anda yakin ingin menghapus data ini secara permanen ?");
    if (r == true) {
      this.db.collection('amil').doc(rowID).delete();
      alert('Data berhasil dihapus');
    } else {
      return;
    }
  }

}
  