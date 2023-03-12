#
# 27433
# 팩토리얼 2
# https://www.acmicpc.net/problem/27433

import sys
input = sys.stdin.readline

factorial = 1
for i in range(2, int(input()) + 1):
    factorial *= i

print(factorial)