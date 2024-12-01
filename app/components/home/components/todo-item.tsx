import { Check, Trash2 } from "lucide-react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import { Todo, TodoOperations } from "../types"

interface TodoItemProps {
  todo: Todo
  operations: Pick<TodoOperations, "toggleTodo" | "deleteTodo">
}

export function TodoItem({ todo, operations }: TodoItemProps) {
  return (
    <li className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "flex-shrink-0",
          todo.completed && "bg-green-100 text-green-600"
        )}
        onClick={() => operations.toggleTodo(todo.id)}
      >
        <Check className={cn("h-4 w-4", !todo.completed && "opacity-0")} />
      </Button>
      <span className={cn(
        "flex-grow",
        todo.completed && "line-through text-gray-500"
      )}>
        {todo.text}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => operations.deleteTodo(todo.id)}
        className="flex-shrink-0 text-red-500 hover:text-red-700"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  )
}
