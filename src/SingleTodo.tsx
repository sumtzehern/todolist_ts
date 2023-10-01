import { type } from 'os'
import React from 'react'
import { Todo } from './model'
import {AiFillEdit, AiFillDelete } from "react-icons/ai"
import {MdDone } from "react-icons/md"

type Props = {
    todo:Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo,todos,setTodos}:Props) => {
  return (
    <form className='todos_single'>
      <span className='todos_single--text'>
        {todo.todo}
      </span>
      <div className='icon'>
        <AiFillEdit />
      </div>
      <div className='icon'>
        <AiFillDelete/>
      </div>
      <div className='icon'>
        <MdDone/>
      </div>
    </form>
  )
}

export default SingleTodo