//왜 틀리는지 모르겠음!
import java.util.Scanner;
public class java_5597 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int stu_num[] = new int[31];

        for (int i = 0; i < 30; i++)
            stu_num[i] = 0;
        for (int i = 1; i < 29; i++)
        {
            int num = sc.nextInt();
            stu_num[num - 1]++;
        }
        for (int i = 0; i < 28; i++)
        {
            if (stu_num[i] != 1)
                System.out.println(i + 1);
        }
        sc.close();
    }
}
