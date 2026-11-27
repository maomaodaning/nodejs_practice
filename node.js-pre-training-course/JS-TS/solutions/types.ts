interface Todo {
id: number;
title: string;
description?: string;
status: TodoStatus;
readonly createdAt: Date;
}

enum TodoStatus {
PENDING,
IN_PROGRESS,
COMPLETED
}

// TODO Task 1: NewTodo = Todo without id, createdAt and status
type NewTodo = Omit<Todo, "id" | "status" | "createdAt">;

export { Todo, TodoStatus, NewTodo };