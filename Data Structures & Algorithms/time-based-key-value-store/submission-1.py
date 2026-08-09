class TimeMap:

    def __init__(self):
        self.store: dict[str, list[list[str, int]]] = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if (not key in self.store):
            self.store[key] = []
        
        self.store[key].append([value, timestamp])
            

    def get(self, key: str, timestamp: int) -> str:
        if (not key in self.store):
            return "";

        values: list[list[str, int]] = self.store[key];
        result: str = "";

        left: int = 0;
        right: int = len(values) - 1;

        while left <= right:
            middle: int = (left + right) // 2;
            
            if values[middle][1] <= timestamp:
                result = values[middle][0]
                left = middle + 1
            else:
                right = middle - 1

        return result;
        
