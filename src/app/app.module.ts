import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from './contador/contador.component';
import { ListItemsComponent } from './list-items/list-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListItemsComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
