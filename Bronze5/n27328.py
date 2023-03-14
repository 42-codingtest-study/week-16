#
# 27328
# 三方比較 (Three-Way Comparison
# https://www.acmicpc.net/problem/27328

import sys
input = sys.stdin.readline

a = int(input())
b = int(input())

if a < b:
    print(-1)
elif a > b:
    print(1)
else:
    print(0)