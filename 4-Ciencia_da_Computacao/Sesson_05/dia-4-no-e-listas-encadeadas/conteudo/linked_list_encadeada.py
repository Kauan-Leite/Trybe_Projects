from node import Node


class LinkedListEncadeada:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return (
            f"LinkedListEncadeada("
            f"len={self.__length}, value={self.head_value})"
            )

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)
        current_value = self.head_value