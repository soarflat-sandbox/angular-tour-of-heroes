import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

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
  selectedHero: Hero;

  // HeroService を注入する
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // コンポーネント作成直後に呼び出されるライフサイクルフック
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
