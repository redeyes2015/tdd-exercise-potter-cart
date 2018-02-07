const First = Symbol();
const Second = Symbol();
const Third = Symbol();
const Fourth = Symbol();
const Fifth = Symbol();

const AllBooks = [
  First,
  Second,
  Third,
  Fourth,
  Fifth,
];

class PotterCart {
  constructor () {
    this[First] = 0;
    this[Second] = 0;
    this[Third] = 0;
    this[Fourth] = 0;
    this[Fifth] = 0;
  }
  add(book, count) {
    if (!AllBooks.includes(book)) {
      throw new Error('unknown book');
    }
    this[book] += count;
  }
  getPrice() {
    return AllBooks.reduce((acc, book) => {
      return acc += this[book] * 100;
    }, 0);
  }
}

PotterCart.First = First;
PotterCart.Second = Second;
PotterCart.Third = Third;
PotterCart.Fourth = Fourth;
PotterCart.Fifth = Fifth;

module.exports = PotterCart;
