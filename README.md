# [AngularTourOfHeroes](https://angular.jp/tutorial)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## 学習メモ

### `ng genetare component`

`ng genetare component`コマンドはコンポーネントの雛形を生成するコマンド。

以下の場合、`hero-detail`コンポーネントの雛形を生成する。

```bash
$ ng generate component hero-detail
src/app/hero-detail/hero-detail.component.scss # コンポーネントの SCSS ファイル
src/app/hero-detail/hero-detail.component.html # コンポーネントのテンプレートファイル
src/app/hero-detail/hero-detail.component.spec.ts # コンポーネントのテストファイル
src/app/hero-detail/hero-detail.component.ts # コンポーネントクラスのファイル
```

また、`src/app/app.module.ts`で`hero-detail`コンポーネントをインポートし、`declarations`に`HeroDetailComponent`が追加される。

```ts
// 省略...
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// 省略...

@NgModule({
  declarations: [
    // 省略...
    // HeroDetailComponent を宣言しているので、テンプレートで <hero-detail> を利用できる。
    HeroDetailComponent
  ],
// 省略...
})
```

### `ng generate service`

`ng generate service`はサービスの雛形を作成するコマンド。

以下のコマンドを実行した場合、`hero`サービスの雛形を生成する。

```bash
$ ng generate component hero
src/app/hero.service.ts # サービスクラスのファイル
src/app/hero.service.spec.ts # サービスのテストファイル
```

サービスをプロバイダとして登録すれば、そのサービスを注入できる。

サービスが注入されたコンポーネントは、そのサービスが提供するデータやメソッドにアクセスできる。

### `ng generate module`

モジュールの雛形を作成するコマンド。

以下のコマンドを実行した場合、`app-routing`モジュールの雛形を作成。

```bash
$ ng generate module app-routing --flat --module=app
```

- `--flat`オプションを付与することで、`src/app`にファイルが生成される。
- `--module=app`オプションを付与することで、`app.module.ts`に作成したモジュールをインポートする記述が追加される。

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
