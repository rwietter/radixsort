import Radixsort from "./Radixsort.ts";
import MaxValue from "./MaxValue.ts";

export default class App {
  private unsortedArray: number[] = [454, 2, 900000, 7];
  private length: number = this.unsortedArray.length;
  private maxValueArray: number = 0;

  getMaxValue() {
    const maxValue = new MaxValue();
    this.maxValueArray = maxValue.getMaxValue(this.unsortedArray, this.length);
    if (!this.maxValueArray) return;
  }

  radixSort() {
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
