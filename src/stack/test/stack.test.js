const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allow to push item', () => {
    stack.push('🎈');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throws an error if stack is empty', () => {
      // 함수의 실행한 결과값을 확인하는게 아니라 jest가 함수 실행도중 에러가 발생하는지 확인해야 하므로 arrow fn을 사용한다
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item and removes it from the stack', () => {
      stack.push('🍇');
      stack.push('🥑');

      expect(stack.pop()).toBe('🥑'); // 함수를 실행한 '결과값'을 비교하므로 arrow fn 사용 X
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('throw an error if stack is empty', () => {
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item but keeps it in the stack', () => {
      stack.push('🍋');
      stack.push('🎂');

      expect(stack.peek()).toBe('🎂');
      expect(stack.size()).toBe(2);
    });
  });
});
