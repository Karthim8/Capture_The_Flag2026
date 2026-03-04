def check_key(user_key):
    return sum(ord(c) for c in user_key) == 500

user_input = input("Enter serial key: ")
if check_key(user_input):
    print("Correct! flag{keygen_cracked}")
else:
    print("Wrong key!")
