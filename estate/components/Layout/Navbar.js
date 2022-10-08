import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem,  IconButton, Flex, Box, Spacer, Image} from '@chakra-ui/react'
import Link from 'next/Link'
import {FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import styles from './Layout.module.scss'
import {BsSearch} from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'
import {MdRoofing} from 'react-icons/md'
import {AiOutlineFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'


const Navbar = () => {
  return (
    <Box borderColor='gray.600'>
    <div className={styles.social} bgColor={'inherit'} >
                    <a href="#"><AiOutlineFacebook/></a>
                    <a href="#"><AiFillTwitterCircle/></a>
                    <a href="#"><AiFillInstagram/></a>
                    <a href="#"><AiFillLinkedin/></a>
    </div>
    <Flex className={styles.navba}   maxWidth={'1000px'} >
    <div className={styles.nav_comp}>
    <Box fontSize='1.5xl' fontWeight='bold' color='purple.700' cursor='pointer'  >
        <Link href='/'><h2>
            <MdRoofing className={styles.logImage} />
            NaijaProps</h2>
        </Link>
        

    </Box>
    
    <Spacer/>
    <Box>
        <Menu>
            <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400" size="sm" >
            </MenuButton>
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link> 
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link> 
                    <Link href='/search?category=rent' passHref>
                        <MenuItem icon={<FcAbout/>}>Rent</MenuItem>
                    </Link> 
                    <Link href='/search?category=sale' passHref>
                        <MenuItem icon={<FiKey/>}>Sale</MenuItem>
                    </Link>    
                </MenuList>
            
        </Menu>
       

    </Box>
    </div>
    </Flex>
    </Box>
  )
}

export default Navbar