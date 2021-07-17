import { Component, OnInit, Inject } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute } from  "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from  "@angular/fire/auth";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import "firebase/auth";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  Dataamil: any = [];
  timestamp: any;
  loading: boolean = false;

  constructor(
    public  router:  Router,
    public db: AngularFirestore,
    public  Auth:  AngularFireAuth,
      public dialog:MatDialog //menambahkan variabel dialog
      //fungsi untuk menampilkan dialog penambahan alamat baru
  ) { }

  ngOnInit(): void {
    this.getDataAmil();
  }
  getDataAmil(){
    this.db.collection('amil').valueChanges({idField: 'id'}).subscribe(res=>{
    this.Dataamil = res;
    console.log(res);
    })
  }

  dialogEdit(item: any): void {
    const dialogRef = this.dialog.open(DialogEdit, {
      width:'450px',
      data: {data: item},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'dialog-container',
  templateUrl: 'dialog-edit.html',
})
export class DialogEdit {
  data: any;

loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogEdit>,
    public db: AngularFirestore,
    private router:Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public sourceData: any
  ){
    if (sourceData.data != null) {
      this.data = sourceData.data;
    }
  }
  
  editData(){
    this.loading = true;
    if (this.data != null) {
      this.db.collection('amil').doc(this.data.id).update(this.data).then(res => {
        alert('Data berhasil diperbarui.');
        this.dialogRef.close();
      })
    } else {
      alert('Gagal Memperbarui Data.');
      this.dialogRef.close();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}