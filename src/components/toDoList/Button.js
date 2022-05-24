import React from 'react'
import { getClasses } from '../../utils/getClasses';
import styles from '../../styles/modules/button.module.scss';

const buttonTypes={
  primary:'primary',
  secondary:'secondary'
}
 
const Button = ({children,variant,type,onClick}) => {
  return (
    <div>
      <button 
        className={getClasses([styles.button,
        styles[`button--${buttonTypes[variant]}`]])}
        onClick={onClick}
        type={type==='submit'?'submit':'button'}>
        {children}
        
        </button>
    </div>
  )
}

export const SelectButton=({children})=>{
  return(
    <select className={getClasses([styles.button,styles.button__select])}>{children}</select>
  )

}

export default Button;