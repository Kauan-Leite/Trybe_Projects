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


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)


stack = LimitStack(2)
stack.push(1)
stack.push(-2)
try:
    stack.push(5)
except StackOverflow:
    print('The Stack is full')
