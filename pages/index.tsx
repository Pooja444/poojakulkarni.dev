import type { NextPage } from 'next'
import NavBar from './navbar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Box>
      <NavBar></NavBar>
    </Box>
  )
}

export default Home