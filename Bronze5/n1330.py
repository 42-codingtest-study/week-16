#
# 1330
# 두 수 비교하기
# https://www.acmicpc.net/problem/1330

import sys
input = sys.stdin.readline

a, b = map(int, input().split())

if a > b:
    print('>')
elif a < b:
    print('<')
else:
    print('==')