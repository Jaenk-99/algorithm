def solution(answers):
    test1 = [1, 2, 3, 4, 5]
    test2 = [2, 1, 2, 3, 2, 4, 2, 5]
    test3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    answer = []
    answer1 = []
    answer2 = []
    answer3 = []
    for i, val in enumerate(answers):
        if val == test1[i%len(test1)]:
            answer1.append(val)
        if val == test2[i%len(test2)]:
            answer2.append(val)
        if val == test3[i%len(test3)]:
            answer3.append(val)
    max_answer = max(len(answer1), len(answer2), len(answer3))
    answer = []
    if max_answer == len(answer1):
        answer.append(1)
    if max_answer == len(answer2):
        answer.append(2)
    if max_answer == len(answer3):
        answer.append(3)
    return answer