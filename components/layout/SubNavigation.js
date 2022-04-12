import React from 'react'
import classes from './SubNavigation.module.css'

function SubNavigation() {
  return (
    <div className={classes.main_container}>
        <ul className={classes.navigation_wrapper}>
            <li>aboutme</li>
            <li>skills</li>
            <li>education</li>
        </ul>
    </div>
  )
}

export default SubNavigation