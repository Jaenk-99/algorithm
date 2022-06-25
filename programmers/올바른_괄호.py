def solution(s):
    check = []

    for i in range(len(s)):
        if s[i] == "(":
            check.append("(")
        
        elif (len(check) == 0):
            return False
        
        else :
            check.pop()
    
    return True if len(check)==0 else False
