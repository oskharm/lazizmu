import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import firebase from 'firebase';

@Component({
  selector: 'app-presensi-pulang',
  templateUrl: './presensi-pulang.component.html',
  styleUrls: ['./presensi-pulang.component.css']
})
export class PresensiPulangComponent implements OnInit {

  Rakbuku: any = [];
  timestamp: any;
  loading: boolean = false;

  constructor(public db: AngularFirestore,
    public dialog: MatDialog) { }

  ngOnInit(){
  }

  dialogTambah(item: any): void {
    const dialogRef = this.dialog.open(DialogTambah, {
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
  templateUrl: 'dialog-tambah-pulang.html',
})
export class DialogTambah { 
  datapresensi: any = {};
timestamp: any;
loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogTambah>,
    public db: AngularFirestore,
    private router:Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public sourceData: any
  ){}
  addData() {
    this.loading = true;
    var id_presensi = this.datapresensi.id;
    var dt = {
     id_presensi: this.datapresensi.id,
     pulang: firebase.firestore.FieldValue.serverTimestamp()
    }
    this.db.collection('presensi').doc(id_presensi).update(dt).then(res => {
      this.loading = false;
      alert('Data berhasil di tambahkan');
      window.location.reload();
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}