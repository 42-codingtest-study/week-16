import java.io.*;
public class java_25304 {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

        int total = Integer.parseInt(bf.readLine());
        int cnt = Integer.parseInt(bf.readLine());
        int check = 0;

        for (int i = 0; i < cnt; i++)
        {
            String b[] = bf.readLine().split(" ");
            int price = Integer.parseInt(b[0]);
            int num = Integer.parseInt(b[1]);

            int total2 = price * num;

            check += total2;
        }
        if (check == total)
            System.out.println("Yes");
        else
            System.out.println("No");
    }
}