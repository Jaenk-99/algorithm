from itertools import product

N, M = map(int, input().split())
arr=[]
for i in range(1, N+1):
    arr.append(i)

for result in product(arr, repeat = M):
    print(*result)

#product란 중복 순열   permutations와 비슷하지만 repeat으로 중복 횟수를 지정