export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodoOperations {
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}
