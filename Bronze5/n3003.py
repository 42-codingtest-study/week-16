#
# 3003
# 킹, 퀸, 룩, 비숍, 나이트, 폰
# https://www.acmicpc.net/problem/3003

import sys
input = sys.stdin.readline

chess = [1, 1, 2, 2, 2, 8]
find = list(map(int, input().split()))
result = [0, 0, 0, 0, 0, 0]

for i in range(6):
    result[i] = chess[i] - find[i]

for i in result:
    print(i, end=' ')