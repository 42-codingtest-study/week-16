lst = [input() for _ in range(int(input()))]
for _ in range(int(input())) :
    n = int(input())
    if n > 0 and n < len(lst) + 1 :
        print("Rule {:d}:".format(n), lst[n - 1])
    else :
        print("Rule {:d}: No such rule".format(n))
