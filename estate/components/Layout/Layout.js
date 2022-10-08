import Head from 'next/head'
import React from 'react'
import {Flex, Box, Text, Button, Grid, StylesProvider} from '@chakra-ui/react'
import NavBar from './Navbar'
import Footer from './Footer/Footer'
import styles from './Layout.module.scss'
import {AiOutlineFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

const Layout = ({children}) => {
  return (
    
    <section>
        <Head>REAL ESTATE</Head>
        <div >
            <header className={styles.myheader}>
              <NavBar/>
            </header>
            <main >
                {children}
            </main>
            <Footer/>
        </div>
    </section>
    
  )
}

export default Layout