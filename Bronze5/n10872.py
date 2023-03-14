#
# 10872
# 팩토리얼
# https://www.acmicpc.net/problem/10872

n = int(input())
result = 1

for i in range(2, n + 1):
    result *= i

print(result)