import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sirene1',
  templateUrl: './sirene1.component.html',
  styleUrls: ['./sirene1.component.css']
})
export class Sirene1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg1() {
    alert(
      "Roseeviiniglögi 4 hengelle\n\n1 pullo Marqués de Cáceres Excellens roseeviiniä\n1 tähtianis\n2 cm pala tuoretta inkivääriö viipaloituna\n3-4 rkl ruokosokeria\n1 mandariinin kuori suikaleina\n1 kanelitanko\nmustaipippuria\n2-3 neilikkaa\n\nMittaa kaikki ainekset kattilaan ja kuumenna kiehuvaksi. Nosta kattila pois levyltä, peitä kannella ja anna maustua 10 minuuttia. Siivilöi juoma kannuun ja tarjoa lämpimänä."
    );
  }
  
  msg2() {
    alert(
      "Glögi-sangria 8 hengelle\n\n½ Blossa Vinglögg -glögiä\n½ Spriteä\n appelsiinin ja sitruunan siivuja\npaljon jäitä\n\nJäähdytä boolin ainekset yön yli jääkaapissa. Leikkaa appelsiinista ja sitruunasta siivuja kulhoon tai kannuun. Laita mukaan runsaasti jäitä. Lisää Blossa-glögi ja limonadi, sekoita huolellisesti."
    );
  }
  
  msg3() {
    alert(
      "Seljankukkaglögi 4-6 hengelle\n\n3 dl seljankukkamehua tiivisteenä (esim. Brunnery)\n 3 dl kuivaa valkoviiniä\n2 kanelitankoa\n2-4 tähtianista\n2-4 kokonaista neilikkaa\n\nLaita seljankukkamehu ja mausteet kattilaan. Anna kiehua aivan hiljalleen noin kymmenen minuuttia. Nosta kattila hellalta ja jätä mausteet kuumaan mehuun tekeytymään vähintään vartiksi. Jos tarjoat glögin kuumana, mittaa viini kattilaan ja kuumenna liki kiehuvaksi. Jos tarjoat glögin kylmänä, jäähdytä mehu ja sekoita jääkaappikylmä viini kylmän mehutiivisteen joukkoon. Makeutta voi säätää lisäämällä mehutiivistettä tai valkoviiniä."
    );
  }
  
  msg4() {
    alert(
      "Mausteinen joulubooli 6 hengelle\n\n1,5 l puolukanmakuista siiderijuomaa\n2 kpl appelsiinia\n1 kpl sitruuna\n4 kpl kanelitankoa\n10 kpl neilikkaa\n1 tl pomeranssinkuorta\n1 dl fariinisokeria\n0,5 dl puolukoita\n3/4 - 1 dl sitruslikööriä\n\nPese hedelmät huolellisesti. Purista yhden appelsiinin ja puolikkaan sitruunan mehu. Aseta kattilaan mausteet, fariinisokeri, siideri ja sitrusmehut. Kuumenna ja anna maustua kannen alla noin 15 minuuttia. Siivilöi liemi ja kaada takaisin kattilaan. Viipaloi toinen appelsiineista ja puolikas sitruuna. Nosta hedelmäviipaleet ja kuumenna. Mausta halutessasi sitrusliköörillä ja korista booli puolukoilla. Tarjoile maljasta lämpimänä pikkujouluboolina."
    );
  }

}
