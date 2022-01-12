import { Box, Grid } from '@mui/material'
import React from 'react'
import styles from '../styles/layout.module.css'
import Logo from './Logo'

export default function Text({ children, color }) {
    return (
    <Box sx={{maxWidth: 1400,  paddingLeft: 15, paddingRight: 15, paddingBottom: 4 }}>
        <div className={styles.text} style={{color: color}}>
            {children}
        </div>
    </Box>
    )
  }