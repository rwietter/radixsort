import radixsort.Radixsort;

import java.util.Arrays;

public class App {
  public static void main(String args[]) {
    Radixsort radix = new Radixsort();
    int data[] = { 342, 7, 88, 54, 5 };
    int len = data.length;
    radix.radixSort(data, len);
    System.out.println("Sorted Array in Ascending Order: ");
    System.out.println(Arrays.toString(data));
  }
}
