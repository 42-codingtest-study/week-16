for _ in range(int(input())) :
    a, b = input().split()
    if b == "kg" : print("{:.4f} lb".format(2.2046 * float(a)))
    elif b == "l" : print("{:.4f} g".format(0.2642 * float(a)))
    elif b == "lb" : print("{:.4f} kg".format(0.4536 * float(a)))
    else : print("{:.4f} l".format(3.7854 * float(a)))
