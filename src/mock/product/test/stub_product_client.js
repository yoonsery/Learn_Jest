class StubProductClient {
  async fetchItems() {
    // mock 이 아닌 실제 클래스이다! 기존의 client 클래스와 동일한 인터페이스를 가지지만 네트워크는 사용하지 않는 테스트용 클래스
    return [
      { item: '🥐', available: true },
      { item: '🥗', available: false },
    ];
  }
}

module.exports = StubProductClient;
