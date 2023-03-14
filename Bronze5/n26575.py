#
# 26575
# Pups
# https://www.acmicpc.net/problem/26575

import sys
input = sys.stdin.readline

for _ in range(int(input())):
    d, f, p = map(float, input().split())

    print("${:.2f}".format(d * f * p))