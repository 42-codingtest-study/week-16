#
# 8437
# Julka
# https://www.acmicpc.net/problem/8437

import sys
input = sys.stdin.readline

apple = int(input())
plus = int(input())

a = b = int((apple - plus) // 2)

print(a + plus)
print(b)