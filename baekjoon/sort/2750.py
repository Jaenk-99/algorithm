###########################################
N = int(input())
num = []

for i in range(N):
    num.append(int(input()))
num.sort()

for i in range(N):
    print(num[i])

##########################################

N = int(input())
num = []

for i in range(N):
    num.append(int(input()))
num.sort()

for _ in range(N):
    print(num.pop(0))

##########################################

N = int(input())
num = []

for i in range(N):
    num.append(int(input()))
for _ in range(N):
    print(min(num))
    num.remove(min(num))