export default class MaxValue {
  public getMaxNumber(number: number[]) {
    let value = number[0];
    number.filter((item) => item > value ? value = item : null);
    return value;
  }
}
