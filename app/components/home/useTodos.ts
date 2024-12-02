import { useState } from "react"
import { useMutation, useQuery } from "convex/react"
import { api } from "convex/_generated/api"
import { Id } from "convex/_generated/dataModel"

export function useTodos() {
  const [newTodo, setNewTodo] = useState("")

  const addTaskMutation = useMutation(api.tasks.addTask)
  const deleteTaskMutation = useMutation(api.tasks.deleteTask)
  const updateTaskMutation = useMutation(api.tasks.updateTask)


  const addTodo = async () => {
    if (newTodo.trim() !== "") {
      await addTaskMutation({ title: newTodo.trim() })
    }
  }

  const updateTodo = async (id: Id<"tasks">, completed: boolean) => {
    if (id) {
      console.log(id)
      await updateTaskMutation({ id: id, completed })
    }
  }


  const deleteTodo = async (id: Id<"tasks">) => {
    if (id) {
      await deleteTaskMutation({ id: id })
    }
  }

  const listTasksQuery = useQuery(api.tasks.listTasksQuery)


  const operations = {
    addTodo,
    updateTodo,
    deleteTodo
  }

  return { todos: listTasksQuery, operations, newTodo, setNewTodo }
}
