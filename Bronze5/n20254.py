#
# 20254
# Site Score
# https://www.acmicpc.net/problem/20254

import sys
input = sys.stdin.readline

u1, t1, u2, t2 = map(int, input().split())

print(56 * u1 + 24 * t1 + 14 * u2 + 6 * t2)