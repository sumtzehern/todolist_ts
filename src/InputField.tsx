import React, { useRef } from 'react';
import './style.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // Adjust the function signature to accept an event
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
    }}>
      <div className='shell-prompt'>@ Wesley-Sum ~ %   </div>
      <input
        ref={inputRef}
        type='input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter task'
        className='input_box'
      />
      <button className='input_submit' type='submit'>
        Add
      </button>
    </form>
  );
};

export default InputField;