#
# 21300
# Bottle Return
# https://www.acmicpc.net/problem/21300

import sys
input = sys.stdin.readline

bottle = list(map(int, input().split()))
many = 0

for i in bottle:
    many += i

print(many * 5)