#
# 5522
# 카드 게임
# https://www.acmicpc.net/problem/5522

import sys
input = sys.stdin.readline

sum = 0

for _ in range(5):
    sum += int(input())
print(sum)