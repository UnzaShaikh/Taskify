import React from 'react';
import Navbar from './components/Navbar';
import TodoInput from './components/TodoInput';

function App() {
  return <>
    <Navbar />
    <div className="todolist w-1/2 m-auto bg-pink-200 mt-10 rounded-xl">
      <TodoInput/>
    </div>
    
  </>
}
  
export default App;
