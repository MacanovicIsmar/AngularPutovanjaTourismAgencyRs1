import { Output, EventEmitter } from '@angular/core';
import {Component, Input, OnInit} from '@angular/core';
import {MyConfig} from "../MyConfig";
import {PrikazModel, PutovanjeList, SpisakSmjestaja, VodicSpisakItema, ZaduzenjeSpisakItema} from "../PutovanjeGlavni";
/*dodano */import {HttpClient} from "@angular/common/http";
/*dodano*/ import { DatePipe } from '@angular/common'
/*dodano*/ import { SharedService } from './../shared.service';
/*dodano*/import { Subscription } from 'rxjs';
import {SharedataService} from "../sharedata.service";
@Component({
  selector: 'app-prikaz-putovanje',
  templateUrl: './prikaz-putovanje.component.html',
  styleUrls: ['./prikaz-putovanje.component.css']
})
export class PrikazPutovanjeComponent implements OnInit {
  PrikazModeln2: PrikazModel=null; /*model koji sadrzi sve podatke*/
  Trazi: string="";/*string za pretragu*/
  Editputovanje: PutovanjeList;
  Vodicobject:VodicSpisakItema=null;
  Smjestajobject:SpisakSmjestaja=null;
  Zaduzenjeobject:ZaduzenjeSpisakItema=null;
  clickEventsubscription:Subscription;

  /*saljemo parentu*/
  @Output() Editputovanjee = new EventEmitter<PutovanjeList>();
  @Output() Vodicobjecte = new EventEmitter<VodicSpisakItema>();
  @Output() Zaduzenjeobjecte = new EventEmitter<ZaduzenjeSpisakItema>();
  @Output() Smjestajobjecte = new EventEmitter<SpisakSmjestaja>();
  @Output() invokeFirstComponentFunction = new EventEmitter();


  addNewItem(Editputovanje: PutovanjeList,
  Vodicobject:VodicSpisakItema,
             Zaduzenjeobject:ZaduzenjeSpisakItema,
             Smjestajobject:SpisakSmjestaja
  ) {
    this.Editputovanjee.emit(Editputovanje);
    this.Vodicobjecte.emit(Vodicobject);
    this.Zaduzenjeobjecte.emit(Zaduzenjeobject);
    this.Smjestajobjecte.emit(Smjestajobject);
  }

  /*saljemo parentu*/

  constructor(private http:HttpClient,public datepipe: DatePipe,private sharedService:SharedService,
  private SharedataService: SharedataService)
  {
    this.clickEventsubscription=    this.sharedService.getClickEvent().subscribe(()=>{
      this.Putovanjedownload();
    })





  }

  ngOnInit(): void {
    this.Putovanjedownload();

    this.addNewItem(this.Editputovanje,this.Vodicobject,this.Zaduzenjeobject
    ,this.Smjestajobject); /*saljemo parentu*/
  }

  Putovanjedownload() {
    let url:string= MyConfig.adresaserver+"/PutovanjeAngular/PutovanjeGlavni";

    this.http.get<PrikazModel>(url).subscribe(result=>
    {

      this.PrikazModeln2=result;

    })
  }

  GetPutovanja() {
    return this.PrikazModeln2.putovanjeList.filter(s=>s.opis.startsWith(this.Trazi));
  }

  Obrisi(s: PutovanjeList) {
    // alert("brisemo"+s.opis)

    let indexof=this.PrikazModeln2.putovanjeList.indexOf(s)
    this.PrikazModeln2.putovanjeList.splice(indexof,1)

    let url:string= MyConfig.adresaserver+"/PutovanjeAngular/ObrisiPutovanje?PutovanjeID="+s.id;

    this.http.get(url).subscribe(result=>
    {
      alert("Obrisano putovanje"+s.opis);


    })
  }

  UrediPutovanje(s: PutovanjeList) {
    let url:string= MyConfig.adresaserver+"/PutovanjeAngular/UrediPutovanje?PutovanjeID="+s.id;

    this.http.get<PutovanjeList>(url).subscribe(result=>
    {

      this.Editputovanje=result;
      this.Vodicobject=this.Editputovanje.vodicSpisakItema.find(X=>Number(X.value)==this.Editputovanje.vodicID);
      this.Zaduzenjeobject=this.Editputovanje.zaduzenjeSpisakItema.find(X=>Number(X.value)==this.Editputovanje.zaduzenjeID);
      this.Smjestajobject=this.Editputovanje.spisakSmjestaja.find(X=>Number(X.value)==this.Editputovanje.smjestajID);

      /*this.addNewItem(this.Editputovanje,this.Vodicobject,this.Zaduzenjeobject,this.Smjestajobject);*/ /*saljemo parentu*/

      this.SharedataService.changeEditPutovanje(this.Editputovanje);
      this.SharedataService.changeVodicObject(this.Vodicobject);
      this.SharedataService.changeZaduzenjeObject(this.Zaduzenjeobject);
      this.SharedataService.changeSmjestajObject(this.Smjestajobject);
      this.SharedataService.changevidljiv(true);
      let i;
    })
  }
}
