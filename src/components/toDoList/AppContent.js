import React from 'react'
import { useSelector } from 'react-redux';
import style from './ToDoList.module.css';
import { initialValues } from '../../reducer/reducer';
import ToDoItem from './ToDoItem';

const AppContent = () => {
  const todoList = useSelector((state) => state.todoSlice.todoList);
  // console.log("All Items",todoList);
  const sortedToDoList=[...todoList]; 
  // console.log('SortedToDo',sortedToDoList);
  sortedToDoList.sort((a,b)=>new Date(b.time)-new Date(a.time));

  const filterStatus=useSelector((state)=>state.todoSlice.filterStatus);
  const filteredToDoList=sortedToDoList.filter((item)=>{
    if(filterStatus==='all'){
      return true;
    }
    return item.status===filterStatus;
  });

  return (
    <div>
        {
          filteredToDoList.length>0 
          ? filteredToDoList.map((todoItems)=><ToDoItem todoItems={todoItems} key={todoItems.id} />)
          : <h1>'No to do found'</h1>
        }
    </div>
  )
}

export default AppContent