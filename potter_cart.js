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
  getMaxmizedBundleCount (bookCounts, bundleVariety) {
    let bundleCount = 0;
    while (bookCounts.length >= bundleVariety) {
      const currentMinCount = bookCounts.shift();
      for (let i = 0; i < bundleVariety - 1; ++i) {
        bookCounts[i] -= currentMinCount;
      }
      bundleCount += currentMinCount;
    }
    return bundleCount;
  }
  getPrice() {
    const bookCounts = AllBooks.map((book) => this[book]).filter(c => c > 0);
    bookCounts.sort((a, b) => a - b)

    let bundles = new Array(5);
    for (let i = 5; i > 0; --i) {
      bundles[i] = this.getMaxmizedBundleCount(bookCounts, i);
    }
    const bundleDiscount = {
      5: 0.75,
      4: 0.8,
      3: 0.9,
      2: 0.95,
      1: 1,
    };

    if (bundles[3] > 0 && bundles[5] > 0) {
      const extraFourBundlePairs = Math.min(bundles[3], bundles[5]);
      bundles[3] -= extraFourBundlePairs;
      bundles[5] -= extraFourBundlePairs;
      bundles[4] += 2 * extraFourBundlePairs;
    }

    return bundles.reduce((acc, count, variety) => {
      return acc + 100 * count * variety * bundleDiscount[variety];
    }, 0);
  }
}

PotterCart.First = First;
PotterCart.Second = Second;
PotterCart.Third = Third;
PotterCart.Fourth = Fourth;
PotterCart.Fifth = Fifth;

module.exports = PotterCart;
