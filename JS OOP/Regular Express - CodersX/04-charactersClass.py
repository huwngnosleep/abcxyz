import re

# grey
# gray
txt = 'Grey has a gray car'
x = re.sub('[ea]', 'a', txt)
print(x)

# SETS
# [arn]	        Returns a match where one of the specified characters (a, r, or n) are present	
# [a-n]	        Returns a match for any lower case character, alphabetically between a and n	
# [^arn]        Returns a match for any character EXCEPT a, r, and n	
# [0123]	    Returns a match where any of the specified digits (0, 1, 2, or 3) are present	
# [0-9]	        Returns a match for any digit between 0 and 9	
# [0-5][0-9]	Returns a match for any two-digit numbers from 00 and 59	
# [a-zA-Z]	    Returns a match for any character alphabetically between a and z, lower case OR upper case	
# [+]	        In sets, +, *, ., |, (), $,{} has no special meaning, so [+] means: return a match for any + character in the string