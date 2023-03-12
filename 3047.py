lst = list(map(int, input().split()))
C = max(lst)
A = min(lst)
B = sum(lst) - C - A
for i in input() :
    if i == 'C' : print(C, end = " ")
    elif i == 'B' : print(B, end = " ")
    else : print(A, end = " ")
