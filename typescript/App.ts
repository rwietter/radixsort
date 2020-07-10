import Radixsort from "./Radixsort.ts";
import MaxValue from "./MaxValue.ts";

export default class App {
  private unsortedArray: number[] = [55, 3, 77, 4, 4, 2, 55, 0, 1, 3, 46, 7, 8];
  private length: number = this.unsortedArray.length;
  private maxValueArray: number = 0;

  getMaxValue() {
    const maxValue = new MaxValue();
    this.maxValueArray = maxValue.getMaxValue(this.unsortedArray, this.length);
  }

  radixSort() {
    if (!this.maxValueArray) return;
    const rdx = new Radixsort(
      this.unsortedArray,
      this.length,
      this.maxValueArray,
    );
    rdx.radixSort();
    rdx.getArraySorted();
  }

  getArraySorted() {
    console.log(this.unsortedArray);
  }
}

const app = new App();

app.getMaxValue();
app.radixSort();
