#
# 23235
# The Fastest Sorting Algorithm In The World
# https://www.acmicpc.net/problem/23235

import sys
input = sys.stdin.readline
n = 0

while 1:
    sort = list(map(int, input().split()))
    n += 1

    if sort[0] == 0:
        exit()
    else:
        print("Case %d: Sorting... done!"%n)