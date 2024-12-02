import { useState } from "react"
import { useMutation, useQuery } from "convex/react"
import { api } from "convex/_generated/api"

export function useTodos() {
  const [newTodo, setNewTodo] = useState("")

  const addTaskMutation = useMutation(api.tasks.addTask)


  const addTodo = async () => {
    if (newTodo.trim() !== "") {
      await addTaskMutation({ title: newTodo.trim() })
    }
  }

  const listTasksQuery = useQuery(api.tasks.listTasksQuery)
  console.log(listTasksQuery)

  /*  const toggleTodo = (id: number) => {
     setTodos(todos.map(todo =>
       todo.id === id ? { ...todo, completed: !todo.completed } : todo
     ))
   }
 
   const deleteTodo = (id: number) => {
     setTodos(todos.filter(todo => todo.id !== id))
   }
  */
  const operations = {
    addTodo,
  }

  return { todos: listTasksQuery, operations, newTodo, setNewTodo }
}
