ans = 0
for i in range(1, 6) :
    if "FBI" in input() :
        print(i, end = " ")
        ans += 1
if ans == 0 : print("HE GOT AWAY!")
