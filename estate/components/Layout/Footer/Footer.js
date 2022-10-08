import React from 'react'
import styles from './Footer.module.scss'
import {Text, Box, Flex} from '@chakra-ui/react'
import Link from 'next/link';
import {MdRoofing} from 'react-icons/md'
import { useRouter } from 'next/router';
import {AiOutlineFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {

  const router = useRouter()

  const rentProperties = (item) =>{
        router.push(`/search?category=${item}`)
}
  return (
    <footer className={styles.footerDistributed}>
    <Box className={styles.footerContainer}>
  <Flex maxWidth={'400px'} alignItems='center' justifyContent={'space-around'} marginBottom='5'>

    <a href="#"><AiOutlineFacebook/></a>
    <a href="#"><AiFillTwitterCircle/></a>
    <a href="#"><AiFillInstagram/></a>
    <a href="#"><AiFillLinkedin/></a>

  </Flex>

  <div className={styles.f_left}>

    <Flex alignItems={'center'} justifyContent={'space-around'} maxWidth={'450px'} >


      <p onClick={()=>rentProperties('rent')}>RENT PROPERTY</p>
      <p onClick={()=>rentProperties('sale')}>BUY PROPERTY</p>

     
    </Flex>
        <Link href='/'><p className={styles.f_header}>
            <MdRoofing className={styles.logImage} />
            NaijaProps</p>
        </Link>

  </div>
  </Box>
  <p> <small>&copy; Copyright 2022/audupaul58 </small> </p>
</footer>
        
   
  )
}

export default Footer