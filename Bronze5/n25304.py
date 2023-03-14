#
# 25304
# 영수증
# https://www.acmicpc.net/problem/25304

import sys
input = sys.stdin.readline

x = int(input())
n = int(input())
price = 0

for _ in range(n):
    a, b = map(int, input().split())
    price += a * b

if x == price:
    print("Yes")
else:
    print("No")