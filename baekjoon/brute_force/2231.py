# # 백준 2231번 분해합을 풀어봅시다.
N = int(input())
M = 1

while(N != (sum(map(int, str(M)))) + M and M != N):
    M += 1
if M == N:
    print(0)
else :
    print(M)