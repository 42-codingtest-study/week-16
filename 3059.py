alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for _ in range(int(input())) :
    s = input()
    ans = 2015
    visit = [1] * 26
    for i in s :
        if visit[alpha.index(i)] == 1 :
            visit[alpha.index(i)] = 0
            ans -= ord(i)
    print(ans)
