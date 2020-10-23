import MaxNumberFromArr from './MaxValue';
import Radixsort from './Radixsort';


interface IMaxNumber {
  getMaxNumber(arr: number[]): number;
}
interface IRadix {
  radixSort(data: number[], length: number, max: number): number[];
}

export default class App {
  private data: number[] = [55, 3, 77, 4, 4, 2, 55, 0, 1, 3, 46, 7, 8];
  private length: number = this.data.length;
  private max: number = 0;

  constructor(MaxNumber: IMaxNumber) {
    this.max = MaxNumber.getMaxNumber(this.data);
  }

  radix(rdx: IRadix) {
    if (!this.max) return;
    
    rdx.radixSort(this.data, this.length, this.max)
  }

  displayUnsorted() {
    return this.data;
  }

  display() {
    console.log(this.data);
  }
}

const max = new MaxNumberFromArr();
export const rdx = new Radixsort();

const app = new App(max);
app.radix(rdx)

app.display();
