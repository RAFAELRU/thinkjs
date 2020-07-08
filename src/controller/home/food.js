const Base = require('../base');

module.exports = class extends Base {
  async indexAction() {
    this.meta_title = '重庆美食';
    return this.display();
  };

  async moreAction() {
    return this.display();
  };
};
