n, c = map(int, input().split())
total, bed, bal, tc = 0, 0, 0, 0
for _ in range(n) :
    num, tp = input().split()
    if tp == "bedroom" : bed += int(num)
    if tp == "balcony" : bal += int(num)
    total += int(num)
print(total)
print(bed)
print(round((total - (bal / 2)) * c, 1))
