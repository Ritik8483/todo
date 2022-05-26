import React, { useEffect, useState } from 'react'
import styles from '../../styles/modules/todoItem.module.scss';
import {getClasses} from '../../utils/getClasses';
import { MdDelete,MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteToDo, updateToDo } from '../../reducer/reducer';
import toast from 'react-hot-toast';
import ToDoModal from './ToDoModal';
import CheckButton from './CheckButton';

const ToDoItem = ({todoItems}) => {
    const[updateModalOpen,setupdateModalOpen]=useState(false);
    const[checked,setChecked]=useState(false);
    const dispatch=useDispatch();

    useEffect(()=>{
        if(todoItems.status==='complete'){
            setChecked(true);
        }
        else{
            setChecked(false);
        }
    },[todoItems.status]);
    const handleDelete=()=>{
        dispatch(deleteToDo(todoItems.id));
        toast.success('Task Deleted Successfully');
    }
    const handleUpdate=()=>{
        setupdateModalOpen(true);
    }
    const handleCheck=()=>{
        dispatch(updateToDo({
            ...todoItems,
            status:checked ? 'incomplete' : 'complete',
        }))
    }
  return (
    <div>
        <div className={styles.item}>
            <div className={styles.todoDetails}>
                <CheckButton checked={checked} handleCheck={handleCheck} />
                <div className={styles.texts}>
                    <p className={getClasses([styles.todoText,
                    todoItems.status==='complete' && styles['todoText--completed']
                    ])}>
                        {todoItems.title}
                    </p>
                    <p className={styles.time}>{todoItems.time}</p>
                </div>
            </div>
            <div className={styles.todoActions}>
                <div 
                    className={styles.icon} 
                    onClick={handleUpdate}
                    role='button'
                    tabIndex={0}>
                <MdEdit/>
                </div>
                <div 
                    className={styles.icon} 
                    onClick={handleDelete}
                    role='button'
                    tabIndex={0}>
                <MdDelete/>
                </div>
            </div>
        </div>
        <ToDoModal
         type='update'
         todoItems={todoItems}
         modalOpen={updateModalOpen}
         setmodalOpen={setupdateModalOpen}
        />
    </div>
  )
}

export default ToDoItem