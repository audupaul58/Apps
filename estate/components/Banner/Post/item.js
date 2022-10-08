import React from 'react'
import Link from 'next/Link';
//import Image from 'next/image';
import {Flex, Box, Center, useColorModeValue, Heading, Text,  Stack, Image, Avatar} from '@chakra-ui/react'
import styles from './Item.module.scss';
import DefaultImage  from '../../../public/Images/istockphoto-1358389574-170667a.jpg'
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified, GoUnverified} from 'react-icons/go'
import millify from 'millify'
import {Row, Col, Container} from 'react-bootstrap';


const Post = ({item}) => {
  return (
    <Link href={`${item.slug}`}>
      
      <Row className={styles.banner_container}>
      <Box 
        role={'group'}
        p={0}
        maxW={'350px'}
        maxH={'fit-content'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
       >
        
          <Image
            p={2}
            rounded={'lg'}
            height={180}
            width={330}
            objectFit={'cover'}
            src={item.images? item.images: DefaultImage}
          />
        </Box>
        
        <Col p='5'>
          <div className={styles.itemTop} >
          <div className={styles.itemTop} alignItems='center' >
             <div >{item.isVerify === true ? <GoVerified className={styles.verify}/> : <GoUnverified className={styles.unverfy}/>}</div>
             <h2  color={'purple.800'} fontSize={'sm'} marginLeft='2' textTransform={'uppercase'} fontWeight='800'>NGN{item.prices}{item.rentFrequencies != 'None'? item.rentFrequencies : "M"}</h2>   
          </div>
          <Box>
            <Avatar size='sm' src={item.agency}/>
         </Box>
          </div>

          <Col  m='0' p='0'>
          <div alignItems='center' justifyContent='space-between' w='250px' color='gray.400' className={styles.facility}>
            {item.rooms} <FaBed/> | {item.baths} <FaBath/>| {millify(item.area)} sqft <BsGridFill/> 
          </div>
         
          
              <h1 > {item.title.length > 30? item.title.substring(0, 30) : item.title }</h1>
              <p >{item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description }</p>
         

          </Col>

          
         
        </Col>
     
    </Row>
   
    
 </Link>
  )
}

export default Post