import java.io.*;
import java.util.StringTokenizer;

public class java_10807 {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

        int total = Integer.parseInt(bf.readLine());
        int num[] = new int[total];
        int cnt = 0;

        StringTokenizer st = new StringTokenizer(bf.readLine());

        for (int i = 0; i < total; i++)
            num[i] = Integer.parseInt(st.nextToken());

        int cor_num = Integer.parseInt(bf.readLine());
        for (int i = 0; i < total; i++)
        {
            if (num[i] == cor_num)
                cnt++;
        }
        System.out.println(cnt);
        bf.close();
    }
}
