import { Box, Grid } from '@mui/material'
import React from 'react'
import styles from '../styles/layout.module.css'

export default function AdviceText({ children, color }) {
    return (
    <Box sx={{maxWidth: 750,  paddingLeft: 15, paddingRight: 15, paddingBottom: 4 }}>
        <div className={styles.adviceText} style={{color: color}}>
            {children}
        </div>
    </Box>
    )
  }