import java.util.Scanner;
public class java_10872 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();
        int cur;

        cur = 1;
        for (int i = 1; i <= num; i++)
           cur *= i;
        System.out.print(cur);

        sc.close();
    }
}