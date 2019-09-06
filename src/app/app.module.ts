import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule } from "apollo-angular";
import { HttpLinkModule } from "apollo-angular-link-http";
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}


//npm i --save apollo-angular apollo-client graphql-tag
//npm i --save apollo-angular-link-http
//npm i --save graphql
