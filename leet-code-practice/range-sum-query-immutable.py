class NumArray:
    sum_map = []

    def __init__(self, nums: list[int]):
        self.nums = nums
        self.sumMap()

    def sumMap(self):
        self.sum_map.append(self.nums[0])
        for i in range(1, len(self.nums)):
            self.sum_map.append(self.sum_map[i-1] + self.nums[i])
        print(self.sum_map)

    def sumRange(self, left: int, right: int) -> int:
        if left == 0:
            return self.sum_map[right]
        elif left == right:
            return self.nums[0]
        else:
            return self.sum_map[right] - self.sum_map[left-1]

# Your NumArray object will be instantiated and called as such:
# nums = [-2,0,3,-5,2,-1]
nums = [-1]
obj = NumArray(nums)
# tests = [[0,2],[2,5],[0,5]]
# tests = [[0,4],[1,2],[4,5]]
tests = [[0,0]]
result = []
for test in tests:
    # obj.sumRange(left,right)
    result.append(obj.sumRange(test[0],test[1]))
print(result)