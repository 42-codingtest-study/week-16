while True :
    a, b, c = map(float, input().split())
    if a == b == c == 0 : break
    cnt = 0
    if a <= 4.5 and b >= 150 and c >= 200 :
        print("Wide Receiver", end = " ")
        cnt += 1
    if a <= 6.0 and b >= 300 and c >= 500 :
        print("Lineman", end = " ")
        cnt += 1
    if a <= 5.0 and b >= 200 and c >= 300 :
        print("Quarterback", end = " ")
        cnt += 1
    if cnt == 0 : print("No positions", end = " ")
    print()
