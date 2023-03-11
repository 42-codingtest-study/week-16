while True :
    a_lst = list(map(int, input().split()))
    if a_lst[0] == a_lst[1] == a_lst[2] == 0 : break
    if a_lst[2] - a_lst[1] == a_lst[1] - a_lst[0] :
        print("AP", a_lst[2] + a_lst[2] - a_lst[1])
    else :
        print("GP", int(a_lst[2] * (a_lst[2] / a_lst[1])))
