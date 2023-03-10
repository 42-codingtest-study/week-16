speak = str(input())
listen = str(input())

s_count = 0
for i in range(len(speak)):
    s_count += 1
l_count = 0
for i in range(len(listen)):
    l_count += 1
    
if s_count < l_count:
    print("no")
else:
    print("go")
    