import React from 'react'

const TodoTaskList = (props) => {
    
  return (
    <>
        <div className='flex justify-between items-center'>
                        <div className="tasks w-96 m-auto bg-white mt-5 mb-5 rounded-md h-10 p-2">
                            {props.list}
                        </div>
                        <button className='rounded-md bg-pink-400 hover:bg-red-700 w-16 text-white font-bold h-8 text-center m-4' onClick={()=>{
                            props.handleDelete(props.id);
                        }}>Delete</button>
                        </div>
    </>
  )
}

export default TodoTaskList
