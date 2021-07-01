import React from 'react'
import cn from 'classnames'
import styles from './profile-box.module.css'

import Photo from './photo'
import {ArrowBottom} from './icons'
import Button from './button'
import TextBody from './text-body'

function ProfileBox({name="Ali Rıza Çelebi",slug="4alicelebi" }){
  return <Button className={cn([styles.box])}>
    <Photo/>
    <div className={styles.body}>
      <TextBody bold>{name}</TextBody>
      <TextBody className={styles.slug}>@{slug}</TextBody>
    </div>
   <ArrowBottom className={styles.icon}/>
  </Button>
}

export default ProfileBox