import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ngModel をオプトインするためにインポートする
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeroesComponent を宣言しているので、テンプレートで <app-heroes> を利用できる。
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    // ngModel は FormsModule に属しているため、これをインポートすれば ngModel を利用できる。
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
