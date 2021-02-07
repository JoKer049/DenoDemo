import { v4 } from "https://deno.land/std/uuid/mod.ts";
// interface
import Todo from '../interfaces/Todo.ts';

let todos: Todo[] = [
  {
    id: 'a',
    todo: 'walk dog',
    isCompleted: true,
  },
  {
    id: 'b',
    todo: 'eat food',
    isCompleted: false,
  },
  {
    id: 'c',
    todo: 'exercise',
    isCompleted: true,
  },
  {
    id: 'd',
    todo: 'read a book',
    isCompleted: false,
  }
];

export default todos;