import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  data: any;

loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogTambahData>,
    public db: AngularFirestore,
    private router:Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public sourceData: any
  ){
    if (sourceData.data != null) {
      this.data = sourceData.data;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
