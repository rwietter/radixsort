import MaxValue from '../MaxValue'
import App from '../App';
import Radixsort from '../Radixsort';

test('array should returns 774', () => {
  const max = new MaxValue();
  const arr = [1, 4, 774, 3, 2, 5, 77, 2, 3];
  expect(max.getMaxValue(arr)).toBe(774);
});

test('array should returns [1, 2, 2, 3, 3, 4, 5, 77, 774]', () => {
  const app = new App();
  const arr = [1, 4, 774, 3, 2, 5, 77, 2, 3];
  const len = arr.length;
  const max = app.getMaxValue(arr);
  const rdx = new Radixsort(arr, len, max);
  app.radixSort();
  expect(rdx.radixSort()).toMatchObject([1, 2, 2, 3, 3, 4, 5, 77, 774]);
});
