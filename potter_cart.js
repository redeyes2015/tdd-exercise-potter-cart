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
  getMaxmizedBundlePrice (bookCounts, bundleVariety, discount) {
    let bundledPrice = 0;
    while (bookCounts.length >= bundleVariety) {
      const currentMinCount = bookCounts.shift();
      for (let i = 0; i < bundleVariety - 1; ++i) {
        bookCounts[i] -= currentMinCount;
      }
      bundledPrice += 100 * bundleVariety * currentMinCount * discount;
    }
    return bundledPrice;
  }
  getPrice() {
    const bookCounts = AllBooks.map((book) => this[book]).filter(c => c > 0);
    bookCounts.sort((a, b) => a - b)

    let totalPrice = 0;

    totalPrice += this.getMaxmizedBundlePrice(bookCounts, 5, 0.75);
    totalPrice += this.getMaxmizedBundlePrice(bookCounts, 4, 0.8);
    totalPrice += this.getMaxmizedBundlePrice(bookCounts, 3, 0.9);
    totalPrice += this.getMaxmizedBundlePrice(bookCounts, 2, 0.95);
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
