const Radix = require("../radixsort.js");

test('sorted array should be [0, 0, 0, 1, 2, 48, 553, 835, 934, 2303, 4994949]', () => {
  const array = [835, 553, 48, 0, 0, 2303, 934, 4994949, 0, 1, 2];
  const len = array.length;
  expect(Radix(array, len)).toMatchObject([0, 0, 0, 1, 2, 48, 553, 835, 934, 2303, 4994949]);
});

test('sorted array should be ', () => {
  const array = [48, 0, 0, 0, 0, 1, 2, 3, 5, 6, 3, 3828, 49,];
  const len = array.length;
  expect(Radix(array, len)).toMatchObject([0, 0, 0, 0, 1, 2, 3, 3, 5, 6, 48, 49, 3828]);
});
