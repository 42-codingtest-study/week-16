try :
    while True :
        N, w, d, s = map(int, input().split())
        origin = (((N - 1) * N) // 2) * w
        if origin == s :
            print(N)
        else :
            print((origin - s) // d)
except :
    exit(0)
