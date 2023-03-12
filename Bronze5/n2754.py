#
# 2754
# 학점계산
# https://www.acmicpc.net/problem/2754

score = list(input())

if score[0] == 'A':
    grade = 4.0
elif score[0] == 'B':
    grade = 3.0
elif score[0] == 'C':
    grade = 2.0
elif score[0] == 'D':
    grade = 1.0
else:
    grade = 0.0
    print(grade)
    exit()

if score[1] == '+':
    grade += 0.3
elif score[1] == '-':
    grade -= 0.3
else:
    pass
print(grade)


