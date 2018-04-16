//プラグインの読み込み
var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require('gulp-webserver');

gulp.task('sass', function(){
	gulp.watch('assets/sass/*.scss', function(){
		gulp.src('assets/sass/*.scss') // sass格納パス
			.pipe(sass({outputStyle: 'expanded'})) //吐き出しスタイル
			.pipe(gulp.dest('dest/css')); // css吐き出し先パス
	})
});

gulp.task('web', function () {
	gulp.src('./') // 公開する静的ファイルを配置してあるディレクトリを指定
		.pipe(webserver({
			host: 'localhost',//ホスト名
			port: 8080, //ポート番号
			livereload: true//リロードを自動でするか
		}));
});