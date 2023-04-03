class Stack:
    def __init__(self):
        self._data = list()

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        value = self._data[-1]
        self._data.pop()
        return value

    def peek(self, position=0):
        if self.is_empty():
            return None

        return self._data[position]

    def is_empty(self):
        return not bool(self._data.__len__())

    def min_value(self):
        min_value = self._data[0]
        for elem in self._data:
            if elem < min_value:
                min_value = elem
        return min_value
