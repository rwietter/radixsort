export default class MaxValue {
  public getMaxValue(unsortedArray: number[], length: number) {
    let value = unsortedArray[0];
    unsortedArray.filter((item) => item > value ? value = item : null);
    return value;
  }
}
