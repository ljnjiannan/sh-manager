// 由于需要读取文件所以需要fs模块，也必须导入
const fs = require('fs');
const archiver = require('archiver');
// 第二步，创建可写流来写入数据
const output = fs.createWriteStream(__dirname + "/shm.arc");// 将压缩包保存到当前项目的目录下，并且压缩包名为test.zip
const archive = archiver('zip', {zlib: {level: 9}});// 设置压缩等级
archive.pipe(output);

archive.directory('resource/');
archive.directory('scripts/');
archive.directory('server/');
archive.directory('web/');
archive.append('package.json', {name: 'package.json'});
archive.append('vite.config.js', {name: 'vite.config.js'});
archive.append('nodemon.json', {name: 'nodemon.json'});

// 第五步，完成压缩
archive.finalize();
