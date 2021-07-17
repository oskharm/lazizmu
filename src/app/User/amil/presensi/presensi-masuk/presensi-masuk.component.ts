import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import firebase from 'firebase';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-presensi-masuk',
  templateUrl: './presensi-masuk.component.html',
  styleUrls: ['./presensi-masuk.component.css']
})
export class PresensiMasukComponent implements OnInit {

  constructor(public db: AngularFirestore,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogTambah(item: any): void {
    const dialogRef = this.dialog.open(DialogTambahData, {
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
  templateUrl: 'dialog-tambah-masuk.html',
})
export class DialogTambahData {
  datapresensi: any = {};

  loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogTambahData>,
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
     nama: this.datapresensi.nama,
     rencana: this.datapresensi.rencana,
     output: this.datapresensi.output,
    
     waktu: new Date()
     
    }
    this.db.collection('presensi').doc(id_presensi).set(dt).then(res => {
      this.loading = false;
      alert('Data berhasil di tambahkan');
      window.location.reload();
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
