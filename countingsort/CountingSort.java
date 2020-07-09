package countingsort;

import java.util.Arrays;

public class CountingSort {
  public void countingSort(int data[], int len, int place, int max) {
    int[] output = new int[len + 1]; // tamanho do array mais 1

    int[] count = new int[max + 1]; // aloca memória para o tamanho do maior elemento

    for (int i = 0; i < max; ++i)
      count[i] = 0; // preenche o array do tamanho do maior elemento com zeros

    for (int i = 0; i < len; i++)
      count[(data[i] / place) % 10]++; // soma 1 ao indíce que é gerado pela divisão e resto da divisão do elemento

    for (int i = 1; i < 10; i++)
      count[i] += count[i - 1]; // faz a contagem de indices para servir a ordenação de output

    for (int i = len - 1; i >= 0; i--) {
      /*
       * na posição 9 de count: 19/1%10-1=8 que tem valor 3, adiciona 19 na posição 2
       * de output
       */
      output[count[(data[i] / place) % 10] - 1] = data[i];
      count[(data[i] / place) % 10]--; // decrementa a posição do array count que vai de 0 a 9 até n elementos
    }

    // System.out.println("Situação atual:");
    for (int i = 0; i < len; i++) {
      data[i] = output[i];
    }
    // System.out.println("[" + i + "]" + " " + data[i]);
    // System.out.println("Situação final: " + Arrays.toString(data) + "\n");
  }
}
