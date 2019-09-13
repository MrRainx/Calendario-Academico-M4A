import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { InMemoryCache } from "apollo-cache-inmemory";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./modules/login/login.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalendarioModule } from './modules/calendario/calendario.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    DashboardModule,
    CalendarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({
        uri: "http://35.192.7.211:8000/graphql"
        //uri: "http://localhost:8000/graphql"
      }),
      cache: new InMemoryCache()
    });
  }
}

//npm i
//npm i --save apollo-angular apollo-client graphql-tag
//npm i --save apollo-angular-link-http
//npm i --save graphql
