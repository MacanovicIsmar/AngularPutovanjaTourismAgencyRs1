import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {PutovanjeList, SpisakSmjestaja, VodicSpisakItema, ZaduzenjeSpisakItema} from "./PutovanjeGlavni";

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  constructor() { }

  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private messageSource = new  BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();

  changeEditPutovanje(message: PutovanjeList) {
    this.messageSource.next(message)
  }


  public editDataDetails2: any = [];
  public subject2= new Subject<any>();
  private messageSource2 = new  BehaviorSubject(this.editDataDetails2);
  currentMessage2 = this.messageSource2.asObservable();

  changeVodicObject(message: VodicSpisakItema) {
    this.messageSource2.next(message)
  }

  public editDataDetails3: any = [];
  public subject3= new Subject<any>();
  private messageSource3 = new  BehaviorSubject(this.editDataDetails3);
  currentMessage3 = this.messageSource3.asObservable();

  changeZaduzenjeObject(message: ZaduzenjeSpisakItema) {
    this.messageSource3.next(message)
  }

  public editDataDetails4: any = [];
  public subject4= new Subject<any>();
  private messageSource4 = new  BehaviorSubject(this.editDataDetails4);
  currentMessage4 = this.messageSource4.asObservable();

  changeSmjestajObject(message: SpisakSmjestaja) {
    this.messageSource4.next(message)
  }

  public editDataDetails5: any = [];
  public subject5= new Subject<any>();
  private messageSource5 = new  BehaviorSubject(this.editDataDetails5);
  currentMessage5 = this.messageSource5.asObservable();

  changevidljiv(message: boolean) {
    this.messageSource5.next(message)
  }

}
