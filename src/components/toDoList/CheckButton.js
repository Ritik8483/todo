import React from 'react'
import styles from '../../styles/modules/todoItem.module.scss';
import { motion } from 'framer-motion';
const checkVariant={
    initial:{
        color:'#fff'
    },
    checked:{
        pathLength:1
    },
    unchecked:{
        pathLength:0
    }
};
const boxVariant={
    checked:{
        background:'var(--primaryPurple)',
    },
    unchecked:{
        background:'var(--gray-1)'
    }
}
const CheckButton = ({checked,handleCheck}) => {
  return (
    <div>
        <motion.div 
        className={styles.svgBox}
        variants={boxVariant}
        animate={checked ? 'checked' : 'unchecked'}
        onClick={handleCheck}
        >
        <motion.svg
        className={styles.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
         
        >
        <motion.path
          variants={checkVariant}
          animate={checked ? 'checked' : 'unchecked'}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>

        </motion.div>
    </div>
  )
}

export default CheckButton