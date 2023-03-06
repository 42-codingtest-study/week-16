ans = 0
for i in input() :
    if i == '_' : ans += 6
    elif i == ':' : ans += 2
    else : ans += 1
print(ans)
