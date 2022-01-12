import { Grid } from '@mui/material'
import React from 'react'
import styles from '../styles/layout.module.css'
import Logo from './Logo'

export default function Section({ children, sectionColor, iconColor }) {
    return (
    <div className={styles.section} style={{backgroundColor: sectionColor}}>
        <Logo fill={iconColor}/>
        <Grid 
            style={{margin: 0, top: 20, position: 'relative'}}
            justifyContent='center'
            alignItems='center'>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    </div>
    )
  }