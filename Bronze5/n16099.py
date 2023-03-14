#
# 16099
# Larger Sport Facility
# https://www.acmicpc.net/problem/16099

for _ in range(int(input())):
    l1, w1, l2, w2 = map(int, input().split())

    if l1 * w1 > l2 * w2:
        print("TelecomParisTech")
    elif l1 * w1 < l2 * w2:
        print("Eurecom")
    else:
        print("Tie")