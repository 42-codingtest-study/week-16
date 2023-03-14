#
# 2475
# 검증수
# https://www.acmicpc.net/problem/2475

import sys
input = sys.stdin.readline
import math

a, b, c, d, e = map(int, input().split())

x = (pow(a, 2) + pow(b, 2) + pow(c, 2) + pow(d, 2) + pow(e, 2)) % 10

print(x)