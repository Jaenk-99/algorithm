N = int(input())
M = input().split()
a = []
for i in range(N):
    a.append(int(M[i]))

print(min(a), max(a))
