import {Component, OnInit} from '@angular/core';
import {opstina} from "./opstina";
import {
  GrupeSpisakItema,
  PrikazModel,
  PutovanjeList,
  SpisakSmjestaja,
  VodicSpisakItema,
  ZaduzenjeSpisakItema
} from "./PutovanjeGlavni";
import {HttpClient} from "@angular/common/http";
import {MyConfig} from "./MyConfig";
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
PrikazModeln:PrikazModel=null;
  x:PutovanjeList=null;
  Trazi:string="";
  Editputovanje: PutovanjeList;
  Vodicobject:VodicSpisakItema=null;
  Smjestajobject:SpisakSmjestaja=null;
  Zaduzenjeobject:ZaduzenjeSpisakItema=null;
  grupaobject:GrupeSpisakItema=null;
  PrikaziModal:boolean;


constructor(private http:HttpClient,public datepipe: DatePipe)
{


}

  ngOnInit(): void {
        this.Putovanjedownload();
    }

    /*prima podatke od childa*/
    addItem(newItem: PutovanjeList) {
      this.Editputovanje = newItem;

    }
    addItem2(newitem2:VodicSpisakItema)
  {

    this.Vodicobject=newitem2;
  }
  addItem3(newitem3:ZaduzenjeSpisakItema)
  {

    this.Zaduzenjeobject=newitem3;
  }
  addItem4(newitem4:SpisakSmjestaja)
  {

    this.Smjestajobject=newitem4;
  }




Putovanjedownload() {

  let url:string= MyConfig.adresaserver+"/PutovanjeAngular/PutovanjeGlavni";

  this.http.get<PrikazModel>(url).subscribe(result=>
  {

      this.PrikazModeln=result;

  })




  }

  Obrisi(s:PutovanjeList)
  {

   // alert("brisemo"+s.opis)

    let indexof=this.PrikazModeln.putovanjeList.indexOf(s)
    this.PrikazModeln.putovanjeList.splice(indexof,1)

    let url:string= MyConfig.adresaserver+"/PutovanjeAngular/ObrisiPutovanje?PutovanjeID="+s.id;

    this.http.get(url).subscribe(result=>
    {
        alert("Obrisano putovanje"+s.opis);


    })

  }

  UrediPutovanje(s:PutovanjeList)
  {
    let url:string= MyConfig.adresaserver+"/PutovanjeAngular/UrediPutovanje?PutovanjeID="+s.id;

    this.http.get<PutovanjeList>(url).subscribe(result=>
    {

      this.Editputovanje=result;
      this.grupaobject=this.Editputovanje.grupeSpisakItema.find(X=>Number(X.value)==this.Editputovanje.grupaID);
      this.Zaduzenjeobject=this.Editputovanje.zaduzenjeSpisakItema.find(X=>Number(X.value)==this.Editputovanje.zaduzenjeID);
      this.Smjestajobject=this.Editputovanje.spisakSmjestaja.find(X=>Number(X.value)==this.Editputovanje.smjestajID);
      this.Vodicobject=this.Editputovanje.vodicSpisakItema.find(X=>Number(X.value)==this.Editputovanje.vodicID);
      let i;
    })



  }

  GetPutovanja(){



    return this.PrikazModeln.putovanjeList.filter(s=>s.opis.startsWith(this.Trazi));

  }

  PutovanjeSnimi() {


   this.Editputovanje=null;
   this.Editputovanje.grupaID=Number(this.grupaobject.value);
   this.Editputovanje.zaduzenjeID=Number(this.Zaduzenjeobject.value);
   this.Editputovanje.smjestajID=Number(this.Smjestajobject.value);
   this.Editputovanje.vodicID=Number(this.Vodicobject.value);

    let url:string= MyConfig.adresaserver+"/PutovanjeAngular/SnimiPutovanje";


    this.http.post(url,this.Editputovanje,MyConfig.httpopcije).subscribe((result)=>{

      alert("uspjesno Snimljeno");
    });


  }
}

export class DatepickerOverviewExample {}
