

export class GrupeSpisakItema {
  disabled: boolean;
  group?: any;
  selected: boolean;
  text: string;
  value: string;
}

export class ZaduzenjeSpisakItema {
  disabled: boolean;
  group?: any;
  selected: boolean;
  text: string;
  value: string;
}

export class VodicSpisakItema {
  disabled: boolean;
  group?: any;
  selected: boolean;
  text: string;
  value: string;
}

export class SpisakSmjestaja {
  disabled: boolean;
  group?: any;
  selected: boolean;
  text: string;
  value: string;
}





  export class PutovanjeList {
    id: number;
    vaziOD: Date;
    vaziDO: Date;
    polazak: Date;
    trajanje: string;
    opis: string;
    slika: string;
    nazivgrupe: string;
    vodic: string;
    zaduzenje: string;
    grupaID: number;

    zaduzenjeID: number;
    vodicID: number;
    vodicSpisakItema: VodicSpisakItema[];
    spisakSmjestaja: SpisakSmjestaja[];
    zaduzenjeSpisakItema: ZaduzenjeSpisakItema[];
    grupeSpisakItema: GrupeSpisakItema[];

    slikaPostoji: boolean;
    ocjena: number;
    smjestajID: number;
  }

  export class PrikazModel {
    vodicList?: any;
    putovanjeList: PutovanjeList[];
    putovanjeList2?: any;
    zaduzenjalist?: any;
    zaduzenjalist2?: any;
    smjestajModel?: any;
    aktivnostlist?: any;
    planPutovanjaModel?: any;
    ponudaList?: any;
    turistList?: any;
    rezervacijaList?: any;
    notifikacijaList?: any;
    ocjenaList?: any;
    cjenovnikList?: any;
    tip: string;
    id: number;
    imePrezime?: any;
    pretraga?: any;
    tipPretrage?: any;
    lista_tipova_za_pretragu?: any;
    slikaSmjestaj?: any;
    nazivPutovanje?: any;
  }

