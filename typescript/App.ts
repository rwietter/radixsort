import CountingSort from './Countingsort';
import MaxNumberFromArr from './MaxValue';
import Radixsort from './Radixsort';


interface IMaxNumber {
  getMaxNumber(arr: number[]): number;
}
interface IRadix {
  radixSort(data: number[], length: number, max: number): number[];
}

export default class App {
  private data: number[];
  private length: number;
  private max: number = 0;
  private imaxNum: IMaxNumber;
  private rdx: IRadix;

  constructor(MaxNumber: IMaxNumber, Radix: IRadix, data: number[]) {
    this.imaxNum = MaxNumber;
    this.rdx = Radix;

    this.data = data;
    this.length = this.data.length;
  }

  getMaxNumber(): number | void {
    this.max = this.imaxNum.getMaxNumber(this.data);
  }

  radix() {
    if (!this.max) return;
    
    this.rdx.radixSort(this.data, this.length, this.max)
  }

  displayUnsorted() {
    return this.data;
  }

  display() {
    console.log(this.data);
  }
}

const data: number[] = [55, 3, 77, 4, 4, 2, 55, 0, 1, 3, 46, 7, 8];

const max = new MaxNumberFromArr();
export const radix = new Radixsort(new CountingSort);

const app = new App(max, radix, data);
app.getMaxNumber();
app.radix()
app.display();
