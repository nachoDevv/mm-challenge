import { Box, Grid } from '@mui/material'
import React from 'react'
import styles from '../styles/layout.module.css'
import Logo from './Logo'

export default function Text({ children }) {
    return (
    <Box sx={{maxWidth: 1100, padding: 15}}>
        <div className={styles.text}>
            {children}
        </div>
    </Box>
    )
  }