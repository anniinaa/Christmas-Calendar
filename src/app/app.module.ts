import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Gian1Component } from './gian1/gian1.component';
import { Sirene1Component } from './sirene1/sirene1.component';
import { Sirene2Component } from './sirene2/sirene2.component';
import { Sirene3Component } from './sirene3/sirene3.component';
import { Sirene4Component } from './sirene4/sirene4.component';
import { Sirene5Component } from './sirene5/sirene5.component';
import { Sirene6Component } from './sirene6/sirene6.component';
import { Gian2Component } from './gian2/gian2.component';
import { Gian3Component } from './gian3/gian3.component';
import { Gian4Component } from './gian4/gian4.component';
import { Gian5Component } from './gian5/gian5.component';
import { Gian6Component } from './gian6/gian6.component';
import { Tuukka1Component } from './tuukka1/tuukka1.component';
import { Tuukka2Component } from './tuukka2/tuukka2.component';
import { Tuukka3Component } from './tuukka3/tuukka3.component';
import { Tuukka4Component } from './tuukka4/tuukka4.component';
import { Tuukka5Component } from './tuukka5/tuukka5.component';
import { Tuukka6Component } from './tuukka6/tuukka6.component';
import { Anniina1Component } from './anniina1/anniina1.component';
import { Anniina2Component } from './anniina2/anniina2.component';
import { Anniina3Component } from './anniina3/anniina3.component';
import { Anniina4Component } from './anniina4/anniina4.component';
import { Anniina5Component } from './anniina5/anniina5.component';
import { Anniina6Component } from './anniina6/anniina6.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { BoardComponent } from './sirene6/board/board.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Gian1Component,
    Sirene1Component,
    Sirene2Component,
    Sirene3Component,
    Sirene4Component,
    Sirene5Component,
    Sirene6Component,
    Gian2Component,
    Gian3Component,
    Gian4Component,
    Gian5Component,
    Gian6Component,
    Tuukka1Component,
    Tuukka2Component,
    Tuukka3Component,
    Tuukka4Component,
    Tuukka5Component,
    Tuukka6Component,
    Anniina1Component,
    Anniina2Component,
    Anniina3Component,
    Anniina4Component,
    Anniina5Component,
    Anniina6Component,
    HomePageComponent,
    HeaderPageComponent,
    BoardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'back', component: HomePageComponent},
      {path: 'anniina1', component: Anniina1Component},
      {path: 'anniina2', component: Anniina2Component},
      {path: 'anniina3', component: Anniina3Component},
      {path: 'anniina4', component: Anniina4Component},
      {path: 'anniina5', component: Anniina5Component},
      {path: 'anniina6', component: Anniina6Component},
      {path: 'sirene1', component: Sirene1Component},
      {path: 'sirene2', component: Sirene2Component},
      {path: 'sirene3', component: Sirene3Component},
      {path: 'sirene4', component: Sirene4Component},
      {path: 'sirene5', component: Sirene5Component},
      {path: 'sirene6', component: Sirene6Component},
      {path: 'gian6', component: Gian6Component},
      {path: 'gian2', component: Gian2Component},
      {path: 'gian3', component: Gian3Component},
      {path: 'gian4', component: Gian4Component},
      {path: 'gian5', component: Gian5Component},
      {path: 'gian1', component: Gian1Component},
      {path: 'tuukka1', component: Tuukka1Component},
      {path: 'tuukka2', component: Tuukka2Component},
      {path: 'tuukka3', component: Tuukka3Component},
      {path: 'tuukka4', component: Tuukka4Component},
      {path: 'tuukka5', component: Tuukka5Component},
      {path: 'tuukka6', component: Tuukka6Component},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
