//2475
import java.util.Scanner;
public class java_2475 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int one = sc.nextInt();
        int two = sc.nextInt();
        int three = sc.nextInt();
        int four = sc.nextInt();
        int five = sc.nextInt();
        int res = (one * one + two * two + three * three + four * four + five * five) % 10;

        System.out.print(res);

        sc.close();
    }
}