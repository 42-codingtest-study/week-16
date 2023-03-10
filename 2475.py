def sqrt(n):
    return(n*n)    

a, b, c, d, e = map(int, input().split())
a = sqrt(a)
b = sqrt(b)
c = sqrt(c)
d = sqrt(d)
e = sqrt(e)
print((a+b+c+d+e) % 10)

# list = input().split(" ")
# sum = 0
# result = 0

# for i in list :
#     sum += (int(i)**2)
# result = sum % 10
# print(result)