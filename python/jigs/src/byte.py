s = "vihar"

# 'utf-8' encoding
array1 = bytes(s, 'utf-8')

# 'utf-16' encoding
array2 = bytes(s, 'utf-16')

array3 = bytes([0,1,2,3])

print(array1)
print(array2)
print(array3)
print(len(array3))

# actual bytes in the string
for byte in array1:
    print(byte, end=' ')
print("")
for byte in array2:
    print(bin(byte), end=' ')
print("")
