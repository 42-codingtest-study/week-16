# 질문
#
# 2738
# 행렬 덧셈
# https://www.acmicpc.net/problem/2738

import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr1 = [0, 0, 0]
arr2 = [0, 0, 0]
result = [0, 0, 0]

for i in range(n):
    arr1[i] = list(map(int, input().split()))
for i in range(n):
    arr2[i] = list(map(int, input().split()))

for i in range(3):
    li = [0, 0, 0]
    for j in range(3):
        li[j] = arr1[i][j] + arr2[i][j]
    result[i] = li

for i in result:
    for j in i:
        print(j, end=' ')
    print()
