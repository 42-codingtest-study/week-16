#
# 27324
# ゾロ目 (Same Numbers)
# https://www.acmicpc.net/problem/27324

import sys
input = sys.stdin.readline

n = int(input())

if (n // 10) == (n % 10):
    print(1)
else:
    print(0)