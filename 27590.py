ds, ys = map(int, input().split())
dm, ym = map(int, input().split())
ds = ys - ds
dm = ym - dm
while ds != dm :
    if ds < dm : ds += ys
    else : dm += ym
print(ds)
