// 读取文件
var fs = require('fs')
// souceMap处理文件
var SourceMapConsumer = require('source-map').SourceMapConsumer
// 启动构建进程（已构建则不需要）
var exec = require('child_process').exec

var lineno = process.argv[2] || 0   // 第一个参数为行数
var columnno = process.argv[3] || 0 // 第二个参数为列数
var fileName = process.argv[4] || '' // 第三个参数为错误文件（错误文件名就好）
 
// 构建有map的线上代码
// node build onlineMap为构建命令
exec('node build onlineMap', function () {
 // 读取错误文件的map文件
 var consumer = new SourceMapConsumer(fs.readFileSync(fileName, 'utf8'))
//  var consumer = new SourceMapConsumer(fs.readFileSync('./dist/' + fileName + '.map', 'utf8'))
  // 输出map的错误信息
  console.log(consumer.originalPositionFor({
    line: +lineno,      // +是为了转化为数字
    column: +columnno
  }))
})