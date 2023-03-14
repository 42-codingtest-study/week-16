#
# 3733
# Shares
# https://www.acmicpc.net/problem/3733

while 1:
    try:
        n, s = map(int, input().split())

        print(s // (n + 1))
    except:
        break
