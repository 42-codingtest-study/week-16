while True :
    c = float(input())
    if c == 0 : break
    _sum = 0;
    i = 2
    while _sum < c :
        _sum += 1 / i
        i += 1
    print(i - 2, "card(s)")
