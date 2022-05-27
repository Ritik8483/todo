import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../../reducer/reducer';
import Button, { SelectButton } from './Button'
import style from './ToDoList.module.css';
import ToDoModal from './ToDoModal';

const AppHeader = () => {
    const dispatch=useDispatch();
    const[modalOpen,setmodalOpen]=useState(false);
    // const[filterStatus,setfilterStatus]=useState(initialFilterStatus);
    const filterStatusValue=useSelector((state)=>state.todo.filterStatus);
    const alertFunction=()=>{
        setmodalOpen(true);
    }
    const updateFilter=(e)=>{
        // console.log('Updated Select');
        dispatch(updateFilterStatus(e.target.value))
    }

  return (
    <div>
        <div className={style.appHead}>
            <Button variant='primary' type='button' onClick={alertFunction}>Add Task</Button>
            <SelectButton value={filterStatusValue} onChange={((e)=>updateFilter(e))}>
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