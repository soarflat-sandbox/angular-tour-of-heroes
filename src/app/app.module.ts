import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// ngModel（双方向バインディング）をオプトインするためにインポートする
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    // HeroesComponent を宣言しているので、テンプレートで <app-heroes> を利用できる。
    HeroesComponent,
    // HeroDetailComponent を宣言しているので、テンプレートで <app-hero-detail> を利用できる。
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    // ngModel（双方向バインディング）は FormsModule に属しているため、これをインポートすれば
    // <input [(ngModel)]="currentItem.name" id="eample-ngModal">
    // のように ngModel を利用できる。
    FormsModule,
    // <router-outlet> などが利用できる。
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
