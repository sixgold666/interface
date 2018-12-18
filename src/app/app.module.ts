import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { DocComponent } from './doc/doc.component';

@NgModule({
  declarations: [
    AppComponent,
    DocComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    CdkTreeModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
