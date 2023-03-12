N = int(input())
a, b = int(N ** 0.5), int(N ** 0.5)
while a * b < N :
    if a == b : a += 1
    else : b += 1
print(a, b)
