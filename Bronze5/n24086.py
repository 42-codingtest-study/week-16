#
# 24086
# 身長 (Height)
# https://www.acmicpc.net/problem/24086

import sys
input = sys.stdin.readline

a = int(input())
b = int(input())

if a > b:
    print(a - b)
else:
    print(b - a)