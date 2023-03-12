#
# 26209
# Intercepting Information
# https://www.acmicpc.net/problem/26209

import sys
input = sys.stdin.readline

input = list(map(int, input().split()))

for i in input:
    if i == 9:
        print("F")
        exit()

print("S")