#
# 2744
# 대소문자 바꾸기
# https://www.acmicpc.net/problem/2744

word = list(input())
result=""

for i in word:
    if i.isupper():
        result += i.lower()
    else:
        result += i.upper()

print(result)