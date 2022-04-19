const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    // 1) Arrange, Given
    productService = new ProductService(new StubProductClient());
  });

  it('should filter out only available true', async () => {
    // 1) Arrange, Given
    //  productService = new ProductService(new StubProductClient());

    // 2) Act, When
    const items = await productService.fetchAvailableItems();

    // 3) Assert, Then
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥐', available: true }]);
  });
});
