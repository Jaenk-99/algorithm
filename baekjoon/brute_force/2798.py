# 백준 블랙잭 문제를 풀어봅시다

# map함수란
# map(적용시킬 함수, 적용할 요소들) 
N,M = map(int,input().split())
deck = list(map(int,input().split()))

Max = 0

for i in range(0,N-2):
    for j in range(i+1, N-1):
        for k in range(j+1, N):
            if deck[i] + deck[j]+ deck[k] <= M:
                if deck[i] + deck[j]+ deck[k] > Max:
                    Max = deck[i] + deck[j]+ deck[k]

print(Max)

###########################################################
# combinations 함수를 이용해서 풀어봅시다
# combinations 함수란? combinations(list, num) -> list에 있는 값들을 num개 씩 조합
# ex) lists = [1,2,3]
# a = list(combinations(lists, 2))  ->  [(1,2), (1,3), (2,3)]

from itertools import combinations

N,M = map(int,input().split())
cards = map(int, input().split(" "))

cards_sum = list(map(sum, list(combinations(cards, 3))))
cs_min = cards_sum[0]

for cs in cards_sum:
    if cs <= M and cs_min < cs:
        cs_min = cs
    
print(cs_min)