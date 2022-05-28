import {HttpHeaders} from "@angular/common/http";

export class MyConfig
{
  // static adresaserver:string="https://p2019.app.fit.ba";
  static adresaserver:string="https://localhost:44398";
  static httpopcije={
  headers:new HttpHeaders({'Content-Type':'application/json'})};
}

