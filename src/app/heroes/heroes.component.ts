import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  // コンポーネントのセレクタ。テンプレートで <app-heroes></app-heroes> を記述すれば利用できる。
  selector: 'app-heroes',
  // コンポーネントのテンプレートファイル
  templateUrl: './heroes.component.html',
  // コンポーネント専用のスタイル
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  // コンポーネント作成直後に呼び出されるライフサイクルフック
  ngOnInit() {
  }

}
