import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todoSlice';
import { useState } from 'react';

function AddTodo({ todo }) {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState('');

    const handleUpdate = () => {
        if (newText.trim() !== '') {
            dispatch(updateTodo({ id: todo.id, newText: newText }));
            setNewText(''); // Clear the input field after updating
        }
    };

    return (
        <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
            <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="text-white bg-transparent border-none focus:outline-none"
                placeholder="Enter new text"
            />

            <div className="text-white">{todo.text}</div>

            <button
                onClick={handleUpdate}
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
            >
                Update
            </button>

            <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
                Delete
            </button>
        </li>
    );
}

export default AddTodo;