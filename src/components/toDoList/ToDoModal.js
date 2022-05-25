import React, { useEffect, useState } from 'react'
import styles from '../../styles/modules/modal.module.scss';
import { MdOutlineClose } from "react-icons/md";
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToDo, updateToDo } from '../../reducer/reducer';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

const ToDoModal = ({type,modalOpen,setmodalOpen,todoItems}) => {
    const [title,setTitle]=useState('');
    const[status,setstatus]=useState('Incomplete');
    const dispatch = useDispatch();

    useEffect(()=>{
        if(type==='update' && todoItems){
            setTitle(todoItems.title);
            setstatus(todoItems.status);
        }
        else{
            setTitle('');
            setstatus('Incomplete');
        }
    },[type,todoItems,modalOpen]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title===''){
            toast.error('Please enter an valid title');
            return;
        }
        // console.log({title,status});
        if(title && status){
            if(type==='add'){
                dispatch(addToDo({
                    id:uuid(),
                    title,
                    status,
                    time:new Date().toLocaleString(),
                }));
                toast.success('Task Added Successfully');
                setmodalOpen(false);
            }
            if(type==='update'){
                if(todoItems.title!==title || todoItems.status!==status){
                    dispatch(updateToDo({
                        ...todoItems,
                        title,
                        status,
                    }));
                    toast.success('Task Updated Successfully');
                    setmodalOpen(false);
                }
                else{
                    toast.error('No Changes Made');
                }
            }
        }
        // else{
        //     toast.error('Title should not be empty');
        // }
    }

  return (
    <div>
        {modalOpen && 
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.closeButton} 
                    onClick={(()=>setmodalOpen(false))}
                    tabIndex={0}
                    role='button'>
                    <MdOutlineClose/>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1 className={styles.formTitle}> {type==='update' ? 'Update' : 'Add'} Task</h1>
                    <label htmlFor="title">
                        Title
                        <input type='text' id='title' value={title} onChange={((e)=>setTitle(e.target.value))} />
                    </label>
                    <label htmlFor='status'>
                        Status
                        <select name='status' id='status' value={status} onChange={((e)=>setstatus(e.target.value))}>
                            <option value='incomplete'>Incomplete</option>
                            <option value='complete'>Complete</option>
                        </select>
                    </label>
                    <div className={styles.buttonContainer}>
                        <Button type='submit' variant='primary'> {type==='update' ? 'Update' : 'Add'} Task</Button>
                        <Button type='button' onClick={(()=>setmodalOpen(false))} variant='secondary'>Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
        }
    </div>
  )
}

export default ToDoModal