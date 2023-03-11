light = 299792458
while True :
    ta, tb = map(float, input().split())
    if ta == 0 and tb == 0 : break
    r = tb / ta
    v = ((1 - r ** 2) * (light ** 2)) ** 0.5
    print("{:.3f}".format(v / light))
