class TwoSum:
    values: dict = {}
    index: int = 0

    def add(self, new_val: int) -> None:
        index = index + 1
        self.values[new_val] = index
    
    def find(self, val: int) -> int:
        if (self.values.get(val)):
            self.values.get(val)
        else:
            -1