import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AgGridModule} from 'ag-grid-angular/main';



import { AppComponent } from './app.component';
import { NgbdTypeaheadBasicComponent } from './typeahead-basic';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { RedComponent } from './red/red.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdTypeaheadBasicComponent,
    MyGridApplicationComponent,
    MyGridApplicationComponent,
    RedComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AgGridModule.withComponents(
      [RedComponent]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
