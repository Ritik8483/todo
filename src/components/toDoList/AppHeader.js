import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import style from './ToDoList.module.css';
import ToDoModal from './ToDoModal';

const AppHeader = () => {
    const[modalOpen,setmodalOpen]=useState(false);
    const alertFunction=()=>{
        setmodalOpen(true);
    }

  return (
    <div>
        <div className={style.appHead}>
            <Button variant='primary' onClick={alertFunction}>Add Task</Button>
            <SelectButton>
                <option value='all'>All</option>
                <option value='incomplete'>Incomplete</option>
                <option value='complete'>Complete</option>
            </SelectButton>
        </div>
        <ToDoModal type='add' modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
        
    </div>
  )
}

export default AppHeader;