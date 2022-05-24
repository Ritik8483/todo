import React from 'react'
import { useSelector } from 'react-redux';
import style from './ToDoList.module.css';
import { initialValues } from '../../reducer/reducer';
import ToDoItem from './ToDoItem';

const AppContent = () => {
  const todoList = useSelector((state) => state.todoSlice.todoList);
  console.log(todoList);
  const sortedToDoList=[...todoList];
  sortedToDoList.sort((a,b)=>new Date(b.time)-new Date(a.time));
  return (
    <div>
        {
          sortedToDoList && sortedToDoList.length>0 
          ? sortedToDoList.map((todoItems)=><ToDoItem todoItems={todoItems} key={todoItems.id} />)
          : <h1>'No to do found'</h1>
        }
    </div>
  )
}

export default AppContent