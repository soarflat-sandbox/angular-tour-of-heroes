import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  // @Input() を利用することで、親コンポーネントのデータを子コンポーネントに共有（バインド）できる。
  // 今回の場合 <app-hero-detail [hero]="selectedHero"></app-hero-detail> のようにして
  // 親のデータ(selectedHero)を、子では hero として利用できる。
  // @Input() を利用したバインディングのことをプロパティバインディング（Property binding）という。
  // @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // detail/:id ようなルーティングの id を取得する。
    // http://localhost:4200/detail/13 の場合 id は 13 になる。
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    // １つ前の画面に戻る。
    this.location.back();
  }
}
