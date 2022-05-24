import React from 'react'
import AppContent from './AppContent';
import AppHeader from './AppHeader';
import style from './ToDoList.module.css';

const PageTitle = ({children}) => {
  return (
    <div>
        <h1 className={style.heading}>{children}</h1>
        <div className={style.header_wrapper}>
          <div className={style.header_box}>
            <AppHeader/>
            <AppContent/>

          </div>
        </div>
    </div>
  )
}

export default PageTitle