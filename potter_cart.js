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

    for (let i = 0; i < bookCounts.length - 1; ++i) {
      const currentMinCount = bookCounts[i];
      if (currentMinCount === 0) {
        continue;
      }

      bookCounts[i + 1] -= currentMinCount;
      totalPrice += (100 + 100) * currentMinCount * 0.95;
    }
    totalPrice += 100 * bookCounts[bookCounts.length - 1];
    return totalPrice;
  }
}

PotterCart.First = First;
PotterCart.Second = Second;
PotterCart.Third = Third;
PotterCart.Fourth = Fourth;
PotterCart.Fifth = Fifth;

module.exports = PotterCart;
