package countingsort;

public class CountingSort {
  public void countingSort(int array[], int len, int place) {
    int[] output = new int[len + 1];
    int max = array[0];

    for (int i = 0; i < len; i++) {
      if (array[i] > max)
        max = array[i];
    }
    int[] count = new int[max + 1];

    for (int i = 0; i < max; ++i)
      count[i] = 0;

    for (int i = 0; i < len; i++)
      count[(array[i] / place) % 10]++;

    for (int i = 1; i < 10; i++)
      count[i] += count[i - 1];

    for (int i = len - 1; i >= 0; i--) {
      output[count[(array[i] / place) % 10] - 1] = array[i];
      count[(array[i] / place) % 10]--;
    }

    for (int i = 0; i < len; i++)
      array[i] = output[i];
  }
}
