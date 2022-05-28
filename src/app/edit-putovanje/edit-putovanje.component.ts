import {Component, Input, OnInit} from '@angular/core';
import {PutovanjeList, SpisakSmjestaja, VodicSpisakItema, ZaduzenjeSpisakItema} from "../PutovanjeGlavni";
import {MyConfig} from "../MyConfig";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {PrikazPutovanjeComponent} from "../prikaz-putovanje/prikaz-putovanje.component";
import { SharedService } from './../shared.service';
import {SharedataService} from "../sharedata.service";

@Component({
  selector: 'app-edit-putovanje',
  templateUrl: './edit-putovanje.component.html',
  styleUrls: ['./edit-putovanje.component.css']
})
export class EditPutovanjeComponent implements OnInit {
  @Input() Editputovanje2: PutovanjeList;
  @Input() Vodicobject: VodicSpisakItema=null;
  @Input() Zaduzenjeobject: ZaduzenjeSpisakItema=null;
  @Input() Smjestajobject: SpisakSmjestaja=null;
  Editputovanje3:PutovanjeList;
  vidljiv:boolean;


  constructor(private http:HttpClient,public datepipe: DatePipe,private sharedService:SharedService,
  private SharedataService2: SharedataService
  )
  {


  }

  ngOnInit(): void {

    this.SharedataService2.currentMessage
      .subscribe(message => (this.Editputovanje3= message)); //<= Always get current value!

    this.SharedataService2.currentMessage2
      .subscribe(message => (this.Vodicobject= message)); //<= Always get current value!

    this.SharedataService2.currentMessage3
      .subscribe(message => (this.Zaduzenjeobject= message)); //<= Always get current value!

    this.SharedataService2.currentMessage4
      .subscribe(message => (this.Smjestajobject= message)); //<= Always get current value!

    this.SharedataService2.currentMessage5
      .subscribe(message => (this.vidljiv= message)); //<= Always get current value!
  }

  PutovanjeSnimi() {
   /* this.Editputovanje3.slikaPostoji=null;*/
    this.Editputovanje3.zaduzenjeID=Number(this.Zaduzenjeobject.value);
    this.Editputovanje3.smjestajID=Number(this.Smjestajobject.value);
    this.Editputovanje3.vodicID=Number(this.Vodicobject.value);
    this.vidljiv=false;
    let url:string= MyConfig.adresaserver+"/PutovanjeAngular/SnimiPutovanje";


    this.http.post(url,this.Editputovanje3,MyConfig.httpopcije).subscribe((result)=>{

      alert("uspjesno Snimljeno");
    });



    this.sharedService.sendClickEvent();


  }
}
