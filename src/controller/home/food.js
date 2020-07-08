const Base = require('../base');

module.exports = class extends Base {
  async indexAction() {
    this.meta_title = '重庆美食';
    const foodModel = this.model('food');
    const foodList = await foodModel.getFoodList(1);
    this.assign({
      foodList
    });
    return this.display();
  };

  async moreAction() {
    return this.display();
  };
};
