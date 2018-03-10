import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NgbdTypeaheadBasicComponent } from './typeahead-basic';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NgbdTypeaheadBasicComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
