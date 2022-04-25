a = int(input())
b = int(input())
c = int(input())

N = list(str(a * b * c))
countN = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for i in range(len(N)):
    countN[int(N[i])] += 1

for i in range(len(countN)):
    print(countN[i])
