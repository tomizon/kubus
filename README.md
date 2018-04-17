#KUBUS_document

##ディレクトリ構成
```
[KUBUS]
|— assets(作業用) — sass - _base.scss
|                |      |— _layout.scss
|                |      |— _module.scss
|                |      |— _state.scss
|                |      |— _theme.scss
|                |      |— common.scss
|                |— images
|                |— js
|
|— dest(納品用) — css - common.css
|              |— images
|              |— js
|
|— index.html
|— node_modules (root)
|— gulpfile.js
|— package.json
```


##ファイル命名規則の記述
- cssは下記「コーディング規約」にあるカテゴリー名.css（カテゴリー名.scss）
- jsは機能ごとにファイルを分ける（分かりにくい箇所はコメントにて記載すること）

##画像の命名規則
- 画像名はimg_ 、アイコン画像はicon_を接頭につける
- ロールオーバーの場合は、`_on` `_off`で切り替える

##コーディング規約
- 記述に関してはキャメルケースで記述する
- 一番意識することは、ソースの中でルールが統一されていて、読みやすく・分かりやすくなっていること
- CSS設計はSMACSS(Scalable and Modular Architecture for CSS)
- CSSの弱点である保守性やメンテナンス性を高めつつ、デザインを統一させることでユーザー体験を一貫させ、UXの向上を図る
- 下記の5つのカテゴリーにCSS(sass)を分割、管理
	- Base（サイト全体におけるデフォルトスタイル、ここでデザインの詳細部を実装することは避ける）
	- Layout（ページを構成するパーツのレイアウト）class名は「lay」と始める
	- Module（ページ内において再利用可能なパーツ）class名は「mod」と始める
	- State（コンテンツの「状態」・主にJS）class名は「jsc」と始める
	- Theme（全体のスタイルを変更する場合に利用、主に「オーバーライド＝上書き」して利用）
- sassに関して
	- 変数管理するもの
		- 各sectionの背景色
		- 基本となるテキスト色、リンク色
		- 画像パス
	- mixin管理するもの
		-
	- extend管理するもの
		-

<!--
	- ベンダープリフェックスの呼び出し
 -->

##リセット利用に関して
- リセットcssはbase.cssにて記載すること

##タスクランナー
- gulp.js
- 現在入れているもの
	- gulp-sass
	- gulp-webserver

##対象ブラウザ
- 【PC】IE11以上、macSafari（最新版）、chrome（最新版）、FireFox（最新版）
- 【SP】iOS8以上（safari、chrome）、Android5以上（主にchromeのみ）
- 環境がない場合はVBで確認すること

##ブレークポイント
- SP/700px未満（〜799px）
- PCでもSP表示（一部はSPとwidthが異なる）

##PCファーストorモバイルファースト
