#백준 1436번 영화감독 숌을 풀어봅시다, 666이 들어가는 수로 점점 커짐(666,1666,2666,3666,4666,5666,6660,6661,6662,6663''')
# N = int(input())
movie_title = 666

while(N):
    if "666" in str(movie_title):
        N -= 1
        if N == 0:
            print(movie_title)
            break
    movie_title += 1

