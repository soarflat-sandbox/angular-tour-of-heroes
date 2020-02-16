import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  // コンポーネントのセレクタ。テンプレートで <app-heroes></app-heroes> を記述すれば利用できる。
  selector: "app-heroes",
  // コンポーネントのテンプレートファイル
  templateUrl: "./heroes.component.html",
  // コンポーネント専用のスタイル
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // HeroService を注入する
  constructor(private heroService: HeroService) {}

  // コンポーネント作成直後に呼び出されるライフサイクルフック
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
