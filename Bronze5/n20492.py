#
# 20492
# 세금
# https://www.acmicpc.net/problem/20492

import sys
input = sys.stdin.readline

money = int(input())

print(int(money * 0.78))
print(int(money - (money * 0.2 * 0.22)))