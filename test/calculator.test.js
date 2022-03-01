const it = require('tape');
const calculator = require('../src/calculator');

/*
███████╗███╗   ███╗ ██████╗ ██╗  ██╗███████╗    ████████╗███████╗███████╗████████╗███████╗
██╔════╝████╗ ████║██╔═══██╗██║ ██╔╝██╔════╝    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔════╝
███████╗██╔████╔██║██║   ██║█████╔╝ █████╗         ██║   █████╗  ███████╗   ██║   ███████╗
╚════██║██║╚██╔╝██║██║   ██║██╔═██╗ ██╔══╝         ██║   ██╔══╝  ╚════██║   ██║   ╚════██║
███████║██║ ╚═╝ ██║╚██████╔╝██║  ██╗███████╗       ██║   ███████╗███████║   ██║   ███████║
╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝       ╚═╝   ╚══════╝╚══════╝   ╚═╝   ╚══════╝
*/

it('should exist the calculator lib', (test) => {
  test.plan(1);
  test.notEqual(calculator, undefined);
});

it('should exist the method `sum`', (test) => {
  test.plan(2);
  test.notEqual(calculator.sum, undefined);
  test.equal(typeof calculator.sum, 'function');
});

it('should exist the method `sub`', (test) => {
  test.plan(2);
  test.notEqual(calculator.sub, undefined);
  test.equal(typeof calculator.sub, 'function');
});

it('should exist the method `div`', (test) => {
  test.plan(2);
  test.notEqual(calculator.div, undefined);
  test.equal(typeof calculator.div, 'function');
});


it('should exist the method `mult`', (test) => {
  test.plan(2);
  test.notEqual(calculator.mult, undefined);
  test.equal(typeof calculator.mult, 'function');
});

/*
██╗   ██╗███╗   ██╗██╗████████╗ █████╗ ██████╗ ██╗   ██╗    ████████╗███████╗███████╗████████╗███████╗
██║   ██║████╗  ██║██║╚══██╔══╝██╔══██╗██╔══██╗╚██╗ ██╔╝    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔════╝
██║   ██║██╔██╗ ██║██║   ██║   ███████║██████╔╝ ╚████╔╝        ██║   █████╗  ███████╗   ██║   ███████╗
██║   ██║██║╚██╗██║██║   ██║   ██╔══██║██╔══██╗  ╚██╔╝         ██║   ██╔══╝  ╚════██║   ██║   ╚════██║
╚██████╔╝██║ ╚████║██║   ██║   ██║  ██║██║  ██║   ██║          ██║   ███████╗███████║   ██║   ███████║
 ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝          ╚═╝   ╚══════╝╚══════╝   ╚═╝   ╚══════╝
*/

it('should return 4 when `sum(2, 2)`', (test) => {
  test.plan(1);
  test.equal(calculator.sum(2, 2), 4);
});

it('should return 4 when `sub(6, 2)`', (test) => {
  test.plan(1);
  test.equal(calculator.sub(6, 2), 4);
});

it('should return -4 when `sub(6, 10)`', (test) => {
  test.plan(1);
  test.equal(calculator.sub(6, 10), -4);
});

it('should return 4 when `mult(2, 2)`', (test) => {
  test.plan(1);
  test.equal(calculator.mult(2, 2), 4);
});

it('should return 1 when `mult(1, 1)`', (test) => {
  test.plan(1);
  test.equal(calculator.mult(1, 1), 1);
});

it('should return 2 when `div(4, 2)`', (test) => {
  test.plan(1);
  test.equal(calculator.div(4, 2), 2);
});

it('should return `Infinity` when divide by 0', (test) => {
  test.plan(1);
  test.equal(calculator.div(2, 0), Infinity);
});
