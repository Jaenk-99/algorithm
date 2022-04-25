import sys, math

X = int(sys.stdin.readline())

arr = [0, 0, 1, 1, 2]  

for i in range(5, X+1) :
    a, b, c = X, X, arr[i-1]
    if i % 3 == 0:
        a = arr[i//3]
    if i % 2 == 0:
        b = arr[i//2]
    arr.append(1+ min(a,b,c))

print(arr[X])