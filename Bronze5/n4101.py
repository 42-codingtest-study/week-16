#
# 4104
# 크냐?
# https://www.acmicpc.net/problem/4101

import sys
input = sys.stdin.readline

while 1:
    a, b = map(int, input().split())

    if a == 0 and b == 0:
        exit()

    if a > b:
        print("Yes")
    else:
        print("No")