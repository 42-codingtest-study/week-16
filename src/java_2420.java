//2420

import java.util.Scanner;
public class java_2420 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long m = sc.nextInt();
        long n = sc.nextInt();
        long res = m - n;
        if (n > m)
        {
            res *= -1;
            System.out.print(res);
        }
        else
            System.out.print(res);

        sc.close();
    }
}
