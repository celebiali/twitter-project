import React from 'react'
import cn from 'classnames'
import styles from './col-extra.module.css'

function Sidebar({children}){
  return <div className={cn(styles.layout)} >{children}</div>
}

export default Sidebar