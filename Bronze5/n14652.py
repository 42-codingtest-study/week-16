#
# 14652
# 나는 행복합니다~
# https://www.acmicpc.net/problem/14652

n, m, k = map(int, input().split())

seat = [i for i in range(n * m)]
ground = [0] * n

for i in seat:
    for j in range(n):
        for k in range(m):
            ground[j][k] = i

print(ground)