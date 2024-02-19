def checkName(name):
    # Define the list of suffixes
    suffixes = ['A', 'y', 'i', 'e', 'o', 'u', 'w']
    
    # Check if the last character of the name is in the list of suffixes
    if name[-1] in suffixes:
        return "Bad Name"
    else:
        return "Good Name"

# Test the function

result = checkName(ismail)
print(result)
