package radixsort;

import countingsort.CountingSort;

public class Radixsort {
  CountingSort cs = new CountingSort();

  int getMax(int array[], int n) {
    int max = array[0];
    for (int i = 1; i < n; i++)
      if (array[i] > max)
        max = array[i];
    return max;
  }

  public void radixSort(int array[], int len) {
    int max = getMax(array, len);
    for (int place = 1; max / place > 0; place *= 10)
      cs.countingSort(array, len, place);
  }
}
