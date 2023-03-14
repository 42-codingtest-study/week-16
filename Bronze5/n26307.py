#
# 26307
# Correct
# https://www.acmicpc.net/problem/26307

import sys
input = sys.stdin.readline

h, m = map(int, input().split())

print((h - 9) * 60 + m)