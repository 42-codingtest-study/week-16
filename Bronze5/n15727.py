#
# 15727
# 조별과제를 하려는데 조장이 사라졌다
# https://www.acmicpc.net/problem/15727

l = int(input())

if l % 5 == 0:
    print(l // 5)
else:
    print(l // 5 + 1)