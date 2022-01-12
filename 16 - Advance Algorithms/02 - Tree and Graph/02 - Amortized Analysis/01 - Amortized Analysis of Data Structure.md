# Accounting method
- Think of computation time as money
- Pay money for future operation
- Push operation: 1 unit computation time + 1 unit for popping later
- Pop operation: 1 unit computation time - 1 unit prepaid = 0 
- PopAll operation: 0 unit
So instead of O(n ^ 2), we can consider complexity of PopAll for "n" stack is O(2n)

# Binary counter
considering Increment() method on a bit string
1001010011 + 1
Worst case:
1111111111 + 1 -> go from right to left and +1 for each element
Best case:
1000000000 + 1 -> just +1 for the last element

When overcome the Worst case, next operation will be the Best case


