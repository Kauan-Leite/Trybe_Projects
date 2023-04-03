from linked_list import LinkedList


class Queue:
    def __init__(self):
        self._data = LinkedList()

    def enqueue(self, value):
        self._data.insert_last(value)

    def dequeue(self):
        if self.is_empty():
            return None

        value = self._data.get_element_at(0)
        self._data.remove_first()
        return value

    def peek(self, position):
        if self.is_empty():
            return None

        return self._data.get_element_at(position)

    def is_empty(self):
        return not bool(self._data.__len__())
