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
t.test('第一集買了一本，其他都沒買，價格應為100*1=100元', (t) => {
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

/*
Scenario: 一二三集各買了一本，價格應為100*3*0.9=270
        Given 第一集買了 1 本
        And 第二集買了 1 本
        And 第三集買了 1 本
        And 第四集買了 0 本
        And 第五集買了 0 本
        When 結帳
        Then 價格應為 270 元
*/
t.test('一二三集各買了一本，價格應為100*3*0.9=270', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 1);
  cart.add(PotterCart.Second, 1);
  cart.add(PotterCart.Third, 1);
  const expected = 270;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end()
});

/*
Scenario: 一二三四集各買了一本，價格應為100*4*0.8=320
        Given 第一集買了 1 本
        And 第二集買了 1 本
        And 第三集買了 1 本
        And 第四集買了 1 本
        And 第五集買了 0 本
        When 結帳
        Then 價格應為 320 元
*/
t.test('一二三四集各買了一本，價格應為100*4*0.8=320', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 1);
  cart.add(PotterCart.Second, 1);
  cart.add(PotterCart.Third, 1);
  cart.add(PotterCart.Fourth, 1);
  const expected = 320;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end()
});
/*
Scenario: 一次買了整套，一二三四五集各買了一本，價格應為100*5*0.75=375
        Given 第一集買了 1 本
        And 第二集買了 1 本
        And 第三集買了 1 本
        And 第四集買了 1 本
        And 第五集買了 1 本
        When 結帳
        Then 價格應為 375 元
*/
t.test('一次買了整套，一二三四五集各買了一本，價格應為100*5*0.75=375', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 1);
  cart.add(PotterCart.Second, 1);
  cart.add(PotterCart.Third, 1);
  cart.add(PotterCart.Fourth, 1);
  cart.add(PotterCart.Fifth, 1);
  const expected = 375;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end()
});
/*
Scenario: 一二集各買了一本，第三集買了兩本，價格應為100*3*0.9 + 100 = 370
        Given 第一集買了 1 本
        And 第二集買了 1 本
        And 第三集買了 2 本
        And 第四集買了 0 本
        And 第五集買了 0 本
        When 結帳
        Then 價格應為 370 元
*/
t.test('一二集各買了一本，第三集買了兩本，價格應為100*3*0.9 + 100 = 370', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 1);
  cart.add(PotterCart.Second, 1);
  cart.add(PotterCart.Third, 2);
  const expected = 370;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end()
});
/*
Scenario: 第一集買了一本，第二三集各買了兩本，價格應為100*3*0.9 + 100*2*0.95 = 460
        Given 第一集買了 1 本
        And 第二集買了 2 本
        And 第三集買了 2 本
        And 第四集買了 0 本
        And 第五集買了 0 本
        When 結帳
        Then 價格應為 460 元
*/
t.test('第一集買了一本，第二三集各買了兩本，價格應為100*3*0.9 + 100*2*0.95 = 460', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 1);
  cart.add(PotterCart.Second, 2);
  cart.add(PotterCart.Third, 2);
  const expected = 460;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end()
});
/*
Scenario: 選便宜的算法
        Given 第一集買了 2 本
        And 第二集買了 2 本
        And 第三集買了 2 本
        And 第四集買了 1 本
        And 第五集買了 1 本
        When 結帳
        Then 價格應為 4本+4本=640 元
*/
t.test('選便宜的算法', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 2);
  cart.add(PotterCart.Second, 2);
  cart.add(PotterCart.Third, 2);
  cart.add(PotterCart.Fourth, 1);
  cart.add(PotterCart.Fifth, 1);
  const expected = 640;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end()
});
/*
Scenario: 選便宜的算法, 兩套 5 + 4
        Given 第一集買了 2 本
        And 第二集買了 2 本
        And 第三集買了 2 本
        And 第四集買了 2 本
        And 第五集買了 1 本
        When 結帳
        Then 價格應為 5本+4本 = 695 元
*/
t.test('選便宜的算法, 兩套 5 + 4', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 2);
  cart.add(PotterCart.Second, 2);
  cart.add(PotterCart.Third, 2);
  cart.add(PotterCart.Fourth, 2);
  cart.add(PotterCart.Fifth, 1);
  const expected = 695;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end()
});

/*
Scenario: 選便宜的算法，四套 5+3+5+3
        Given 第一集買了 4 本
        And 第二集買了 4 本
        And 第三集買了 4 本
        And 第四集買了 2 本
        And 第五集買了 2 本
        When 結帳
        Then 價格應為 640*2=1280 元
*/
t.test('選便宜的算法，四套 5+3+5+3', (t) => {
  //arrange
  const cart = new PotterCart();
  cart.add(PotterCart.First, 4);
  cart.add(PotterCart.Second, 4);
  cart.add(PotterCart.Third, 4);
  cart.add(PotterCart.Fourth, 2);
  cart.add(PotterCart.Fifth, 2);
  const expected = 1280;

  //act
  const actual = cart.getPrice();

  //assert
  t.equal(actual, expected);

  t.end()
});
