#
# 27294
# 몇개고?
# https://www.acmicpc.net/problem/27294

import sys
input = sys.stdin.readline

t, s = map(int, input().split())

if 12 <= t <= 16 and s == 0:
    print(320)
else:
    print(280)