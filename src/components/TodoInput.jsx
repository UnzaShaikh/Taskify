import React, { useState } from 'react'
import TodoTaskList from './TodoTaskList';
/**
 * TodoInput Component
 * This component renders an input field and a button to add a todo task
 * It also renders a list of todo tasks added
 */
const TodoInput = () => {
    // State to store the value of the input field
    const [value, setValue] = useState("");
    // State to store the list of todo tasks
    const [todo, setTodo] = useState([]);

    /**
     * Handles the change event of the input field
     * Updates the value state
     * @param {Object} e - The event object
     */
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleDelete = (id) => {
        setTodo((olditems) => {
            return olditems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    /**
     * Saves the todo task to the todo list
     * Resets the value state
     */
    const saveTodo = () => {
        setTodo((olditems) => {
            return [...olditems, value];
        });
        setValue("");
    }

    return (<>
        <div className='flex justify-center items-center w-full flex-col'>
            <div className='addTask'>
                <input type="text" placeholder='Add a task' onChange={handleChange} className='input rounded-md w-96 h-10 p-4' />
                <button className='btn rounded-md bg-pink-400 hover:bg-green-700 w-16 text-white font-bold h-8 text-center m-4' onClick={saveTodo} >Add</button>
            </div>


            <ol>
                {todo.map((list, index) => {
                    return <>
                        {/* Render each todo task */}
                        
                            <TodoTaskList list={list} key={index} handleDelete={handleDelete} id={index} />
                    

                    </>
                })}
            </ol>
        </div>

    </>


    )
}

export default TodoInput
