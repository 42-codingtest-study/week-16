#
# 5341
# Pyramids
# https://www.acmicpc.net/problem/5341

# 등차수열의 합 공식 n*(n+1) / 2

import sys
input = sys.stdin.readline

while 1:
    floor = int(input())

    if floor == 0:
        exit()

    result = floor * (floor + 1)
    result /= 2
    print(int(result))
