# You must write an algorithm that runs in O(n) time and uses only constant extra space.

# if not allowed to use extra space, we can manipulate input array
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        result = []

        for num in nums:
            if(nums[abs(num) - 1] < 0):
                result.append(abs(num))
            else:
                nums[abs(num) - 1] *= -1

        return result
