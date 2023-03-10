////2338
import java.util.Scanner;
import java.math.BigInteger;
public class java_2338 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();

        BigInteger bigA = new BigInteger(a);
        BigInteger bigB = new BigInteger(b);

        System.out.println(bigA.add(bigB));
        System.out.println(bigA.subtract(bigB));
        System.out.print(bigA.multiply(bigB));

        sc.close();
    }
}