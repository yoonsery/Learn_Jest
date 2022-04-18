const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(3);
    expect(cal.value).toBe(3);
  });

  it('clear', () => {
    cal.set(6);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(2);
    cal.add(5);

    expect(cal.value).toBe(7);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtract', () => {
    cal.set(7);
    cal.subtract(5);

    expect(cal.value).toBe(2);
  });

  it('multiply', () => {
    cal.set(3);
    cal.multiply(5);

    expect(cal.value).toBe(15);
  });

  describe('divides', () => {
    it('0 / 0 = NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 = Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });
});
