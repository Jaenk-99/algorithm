import sys
T = int(sys.stdin.readline())
num = []

for _ in range(T):
    num.append(int(sys.stdin.readline()))

for i in range(len(num)):
    arr = [0,0]
    fibonacci(num[i])
    print(arr)

def fibonacci(n):
    if n == 1 :
        arr[1]+=1
        return arr

    elif n == 0:
        arr[0]+=1
        return arr

    else:
        return (fibonacci(n-2)+fibonacci(n-1))

# ################################################
import sys
cnt0 = [1, 0]
cnt1 = [0, 1]

T = int(input())

for _ in range(T):
    num = int(sys.stdin.readline())
    cnt0 = [1, 0] 
    cnt1 = [0, 1]

    if num == 0:
        print("1 0")
    elif num == 1:
        print("0 1")
    else:
        for j in range(2, num+1):
            cnt0.append(cnt0[j-1] + cnt0[j-2])
            cnt1.append(cnt1[j-1] + cnt1[j-2])
        print(f"{cnt0.pop()} {cnt1.pop()}")