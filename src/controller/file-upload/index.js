const Base = require('../base');
const path = require('path');
const fs = require('fs');

module.exports = class extends Base {
  indexAction() {
    this.meta_title = 'my upload';
    return this.display();
  }
  uploadAction() {
    this.meta_title = '上传结果';
    // 获取上传的文件
    const file = this.file('image');
    // file.path是临时生成的文件路径
    const filepath = file.path;

    // 文件上传后，移动到其它位置，否则在请求结束后会删掉该文件
    // 获取文件名
    const basename = path.basename(filepath);
    // 要被移动到的目录
    const uploadPath = path.join(think.ROOT_PATH, 'www/upload/');
    // 创建目标目录
    think.mkdir(uploadPath);
    // 重命名文件-移动文件
    fs.renameSync(filepath, uploadPath + basename);

    if (think.isFile(filepath)) {
      // eslint-disable-next-line no-console
      console.log('is file');
    } else {
      // eslint-disable-next-line no-console
      console.log('not exists');
    }

    this.assign('fileInfo', file);

    return this.display();
  }
};
