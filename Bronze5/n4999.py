#
# 4999
# 아!
# https://www.acmicpc.net/problem/4999

import sys
input = sys.stdin.readline

say = input()
hear = input()

if len(say) >= len(hear):
    print("go")
else:
    print("no")