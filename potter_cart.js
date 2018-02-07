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
    const bookCounts = AllBooks.map((book) => this[book]);
    bookCounts.sort((a, b) => a - b);

    let totalPrice = 0;

    while (bookCounts.length >= 3) {
      const currentMinCount = bookCounts.shift();
      bookCounts[0] -= currentMinCount;
      bookCounts[1] -= currentMinCount;
      totalPrice += (100 + 100 + 100) * currentMinCount * 0.9;
    }
    while (bookCounts.length >= 2) {
      const currentMinCount = bookCounts.shift();
      bookCounts[0] -= currentMinCount;
      totalPrice += (100 + 100) * currentMinCount * 0.95;
    }
    if (bookCounts.length > 0) {
      totalPrice += 100 * bookCounts[0];
    }
    return totalPrice;
  }
}

PotterCart.First = First;
PotterCart.Second = Second;
PotterCart.Third = Third;
PotterCart.Fourth = Fourth;
PotterCart.Fifth = Fifth;

module.exports = PotterCart;
