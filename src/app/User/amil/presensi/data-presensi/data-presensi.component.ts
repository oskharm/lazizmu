import { Component, OnInit,Inject } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from  "@angular/fire/auth";
import "firebase/auth";

@Component({
  selector: 'app-data-presensi',
  templateUrl: './data-presensi.component.html',
  styleUrls: ['./data-presensi.component.css']
})
export class DataPresensiComponent implements OnInit {

  Datapres: any = [];
  
  loading: boolean = false;

  constructor(
    public db: AngularFirestore,
    public  router:  Router,
    public  Auth:  AngularFireAuth,
  ) { }

  ngOnInit(){
    this.getDataPresensi();
  }

  getDataPresensi(){
    this.db.collection('presensi').valueChanges({idField: 'id'}).subscribe(res=>{
    this.Datapres = res;
    console.log(res);
    })
  }

  hapus(rowID: any) {
    var r = confirm("Anda yakin ingin menghapus data ini secara permanen ?");
    if (r == true) {
      this.db.collection('presensi').doc(rowID).delete();
      alert('Data berhasil dihapus');
    } else {
      return;
    }
  }

}
