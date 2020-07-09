module.exports = class extends think.Model {
  getFoodList(currentPages) {
    return this.page(currentPages, 10).select();
  }
};
