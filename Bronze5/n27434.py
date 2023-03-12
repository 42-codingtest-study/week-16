#
# 27434
# 팩토리얼 3
# https://www.acmicpc.net/problem/27434

import sys
input = sys.stdin.readline

factorial = 1
for i in range(2, int(input()) + 1):
    factorial *= i

print(factorial)