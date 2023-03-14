#
# 1271
# 엄청난 부자2
# https://www.acmicpc.net/problem/1271

import sys
input = sys.stdin.readline

n, m = map(int, input().split())
print(n // m)
print(n % m)