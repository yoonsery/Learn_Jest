const ProductClient = require('./product_client');
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems() // client도 호출되니까 독립적으로 test하기 위해 mock사용
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
