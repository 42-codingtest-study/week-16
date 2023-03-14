#
# 2738
# 행렬 덧셈
# https://www.acmicpc.net/problem/2738

import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr1 = []
arr2 = []
result = [0] * n

for row in range(n):
    row = list(map(int, input().split()))
    arr1.append(row)

for row in range(n):
    row = list(map(int, input().split()))
    arr2.append(row)

for row in range(n):
    for col in range(m):
        print(arr1[row][col] + arr2[row][col], end=' ')
    print()
