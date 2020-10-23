interface ICountingSort {
  countingSort(arr: number[], len: number, max: number, place: number): number[];
}

export default class RadixSort {
  private arr: number[] = [];
  private len: number = 0;
  private max: number = 0;
  private sort: number[] = [];
  private cs: ICountingSort;

  constructor(cs: ICountingSort) {
    this.cs = cs;
  }

  radixSort(data: number[], length: number, max: number) {
    this.arr = data;
    this.len = length
    this.max = max;

    let place = 1;

    for (place; Math.trunc(this.max / place) > 0; place *= 10) {
      this.sort = this.cs.countingSort(this.arr, this.len, this.max, place);
    }
    return this.sort;
  }
}
