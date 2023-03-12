#
# 5597
# 과제 안 내신 분..?
# https://www.acmicpc.net/problem/5597

import sys
input = sys.stdin.readline

student = [i for i in range(1, 31)]

for _ in range(28):
    student.remove(int(input()))

for i in student:
    print(i)