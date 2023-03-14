#
# 6840
# Who is in the middle?
# https://www.acmicpc.net/problem/6840

import sys
input = sys.stdin.readline

bear = []
for _ in range(3):
    bear.append(int(input()))

bear.sort()
print(bear[1])