const fetchProduct = require('../async.js');

describe('Async', () => {
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done(); // 💩
    });
  });

  it('async - return', () => {
    return fetchProduct().then((item) => {
      // `return` 사용하는 방식이 done보다 빠르게 수행 & 깔끔
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  it('async - await', async () => {
    // 콜백함수 앞에 async를 붙여야한다
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      // 비동기이므로 return 해주기~
      item: 'Milk',
      price: 200,
    });
  });

  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
