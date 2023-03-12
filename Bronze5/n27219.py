#
# 27219
# Робинзон Крузо
# https://www.acmicpc.net/problem/27219

import sys
input = sys.stdin.readline

n = int(input())

print("V" * (n // 5), end='')
print("I" * (n % 5))