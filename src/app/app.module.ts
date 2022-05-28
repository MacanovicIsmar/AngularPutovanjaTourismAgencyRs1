import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
/*<!--dodano-->*/import {HttpClientModule} from "@angular/common/http";
/*<!--dodano-->*/import { DatePipe } from '@angular/common';
import { EditPutovanjeComponent } from './edit-putovanje/edit-putovanje.component';
import { PrikazPutovanjeComponent } from './prikaz-putovanje/prikaz-putovanje.component';
import { PostavkaComponent } from './postavka/postavka.component'
/*<!--dodano-->*/ import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EditPutovanjeComponent,
    PrikazPutovanjeComponent,
    PostavkaComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
      RouterModule.forRoot([
        {path: 'open-postavke', component: PostavkaComponent},
        {path: 'open-putovanja', component: PrikazPutovanjeComponent},
      ]),

    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
