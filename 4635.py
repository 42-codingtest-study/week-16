while True :
    n = int(input())
    if n == -1 : break
    ans, last = 0, 0
    for _ in range(n) :
        s, t = map(int, input().split())
        ans += s * (t - last)
        last = t
    print(ans, "miles")
