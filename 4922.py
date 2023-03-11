lst = [0] * 1001
lst[1] = 1
lst[2] = 3
for i in range(3, 1000) : lst[i] = lst[i - 1] + lst[i - 1] - lst[i - 2] + 2
while True :
    n = int(input())
    if n == 0 : break
    print("{:d} => {:d}".format(n, lst[n]))
