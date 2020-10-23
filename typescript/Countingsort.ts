export default class CountingSort {
  countingSort(arr: number[], len: number, max: number, place: number) {
    let output: number[] = [max + 1];

    let count: number[] = [max + 1];

    for (let i = 0; i < max; ++i) {
      count[i] = 0;
    }

    for (let i = 0; i < len; i++) {
      let index: number = Math.trunc((arr[i] / place) % 10);
      count[index]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = len - 1; i >= 0; i--) {
      let index: number = Math.trunc((arr[i] / place) % 10);
      output[count[index] - 1] = arr[i];
      count[index]--;
    }

    for (let i = 0; i < len; i++) {
      arr[i] = output[i];
    }
    return arr;
  }
}
