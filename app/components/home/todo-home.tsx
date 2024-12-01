import { Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { TodoItem } from './components/todo-item'
import { useTodos } from './useTodos'


export default function TodoHome() {
  const [todos, operations, newTodo, setNewTodo] = useTodos()

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">My Todo List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Add a new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={() => operations.addTodo(newTodo)}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                operations={operations}
              />
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}