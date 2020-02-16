import { NgModule } from "@angular/core";
// アプリケーションにルーティング機能を付与できるモジュール
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  // デフォルトルート。http://localhost:4200 にアクセスしたら
  // http://localhost:4200/dashboard にリダイレクト
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  // http://localhost:4200/heroes にアクセスしたら HeroesComponent を表示する
  { path: "heroes", component: HeroesComponent },
  // http://localhost:4200/detail/12 などにアクセスしたら HeroDetailComponent を表示する
  { path: "detail/:id", component: HeroDetailComponent },
  // http://localhost:4200/heroes にアクセスしたら DashboardComponent を表示する
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
