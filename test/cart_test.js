/*
Feature: PotterShoppingCart
        In order to 提供最便宜的價格給來買書的爸爸媽媽
        As a 佛心的出版社老闆
        I want to 設計一個哈利波特的購物車
*/
const PotterCart = require("../potter_cart.js");
const t = require('tap');

/*
Scenario: 第一集買了一本，其他都沒買，價格應為100*1=100元
        Given 第一集買了 1 本
        And 第二集買了 0 本
        And 第三集買了 0 本
        And 第四集買了 0 本
        And 第五集買了 0 本
        When 結帳
        Then 價格應為 100 元
*/
t.test('buying_1_first_should_be_100_dollor', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 1);
  const expected = 100;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end();
});

/*
Scenario: 第一集買了一本，第二集也買了一本，價格應為100*2*0.95=190
        Given 第一集買了 1 本
        And 第二集買了 1 本
        And 第三集買了 0 本
        And 第四集買了 0 本
        And 第五集買了 0 本
        When 結帳
        Then 價格應為 190 元
*/
t.test('第一集買了一本，第二集也買了一本，價格應為100*2*0.95=190', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 1);
  cart.add(PotterCart.Second, 1);
  const expected = 190;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end()
});

