count = 0

def welcome():
    global count
    count = count + 1
    print ("Hello from recursion", count)
    #recursion fundtions must always have a stop condition
    welcome()

welcome()