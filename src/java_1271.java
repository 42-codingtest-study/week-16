//1271
import java.util.Scanner;
import java.math.BigInteger;
public class java_1271 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String money = sc.next();
        String people = sc.next();

        BigInteger bigA = new BigInteger(money);
        BigInteger bigB = new BigInteger(people);

        System.out.println(bigA.divide(bigB));
        System.out.println(bigA.remainder(bigB));

        sc.close();
    }
}