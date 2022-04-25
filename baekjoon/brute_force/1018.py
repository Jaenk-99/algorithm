#백준 1018번 체스판 다시 체우기를 풀어봅시다 (브루트 포스)
import math
N, M = map(int, input().split())
chess_board = []
result = math.inf
count = 0

for _ in range(N):
    chess_board.append(input())

for i in range(N-7):
    for j in range(M-7):

        for y in range(i, i+8):
            for x in range(j, j+8):
                if ((x-j)+(y-i)) % 2 == 0 and chess_board[y][x] != "B":
                    count+=1
                if ((x-j)+(y-i)) % 2 == 1 and chess_board[y][x] != "W":
                    count+=1
        if count <= result :
            result = count
        count = 0

        for y in range(i, i+8):
            for x in range(j, j+8):    
                if ((x-j)+(y-i)) % 2 == 0 and chess_board[y][x] != "W":
                    count+=1
                if ((x-j)+(y-i)) % 2 == 1 and chess_board[y][x] != "B":
                    count+=1
        if count <= result :
            result = count
        count = 0
        
print(result)


########################################################