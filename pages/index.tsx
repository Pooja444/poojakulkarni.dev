import type { NextPage } from 'next'
import NavBar from './navbar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Typography } from '@mui/material'
import About from './about'

const Home: NextPage = () => {
  return (
    <About></About>
  )
}

export default Home