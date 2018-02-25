class Sorter {
  constructor() {
    this.store = [];
    this.comparator = (a, b) => a - b
  }

  add(element) {
    this.store.push(element)
  }

  at(index) {
    return this.store[index]
  }

  get length() {
    return this.store.length
  }

  toArray() {
    return this.store
  }

  sort(indices) {
      const sorted_indices = indices.sort((a, b) => a - b);
      const mergeArray = (sorted, i = 0) => {
          this.store[sorted_indices[i]] = sorted[i];
          return (i < sorted.length - 1)? mergeArray(sorted, i + 1): true
      };
      let sorted = sorted_indices.map((item) =>
          this.store[item]).sort(this.comparator);
      mergeArray(sorted);
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction
  }
}

module.exports = Sorter;