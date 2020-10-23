import App from '../App';
import CountingSort from '../Countingsort';
import MaxValue from '../MaxValue';
import Radixsort from '../Radixsort';

describe('TypeScript Radix Sort', () => {
  const max = new MaxValue();
  const rdx = new Radixsort(new CountingSort);
  const arr = [1, 4, 774, 3, 2, 5, 77, 2, 3];
  const len = arr.length;

  test('Max Value of array should return 774', () => {
    
    const expected = 774;
    expect(max.getMaxNumber(arr)).toBe(expected);
  });

  test('Radix Sort should returns array sorted [1, 2, 2, 3, 3, 4, 5, 77, 774]', () => {
    const app = new App(max, rdx, arr);

    app.radix();

    const expected: number[] = [1, 2, 2, 3, 3, 4, 5, 77, 774];

    expect(rdx.radixSort(arr, len, max.getMaxNumber(arr))).toMatchObject(expected);
  });
});
