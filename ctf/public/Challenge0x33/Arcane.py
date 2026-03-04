import hashlib

print("Arcane Star Calculator")

star_db = {
    "Alpha": 4.2,
    "Beta": 6.1,
    "Gamma": 3.7,
    "Delta": 5.5
}

print("Available stars:", list(star_db.keys()))

s1 = input("Enter first star: ")
s2 = input("Enter second star: ")

result = star_db[s1] * star_db[s2]

hash_value = hashlib.md5(str(result).encode()).hexdigest()

key = hash_value[:12]

flag = f"CRACKED{{{key}}}"

print("\nFlag:", flag)