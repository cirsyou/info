'use strict'

const gulp = require('gulp')
const connect = require('gulp-connect')

// 开启本地服务器
gulp.task('server',function(){
  connect.server({
    // 设置根目录
    root:'./',
    port:8090,
    // 启动实时刷新
    livereload:true
  })
});

// 添加默认任务
gulp.task('default',['server']);