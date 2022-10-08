import React, {useState} from 'react'
import {Flex, Box, Text, Avatar} from '@chakra-ui/react'
import styles from '../Post/Post.module.scss';
import useSWR from 'swr';
import Post from './item';
import {Row, Col, Container} from 'react-bootstrap';


const Rent = () => {

    const category = 'rent'
   
    const baseUrl = `http://localhost:8000/properties/?category=${category}`

    console.log('baseUrl: ' + baseUrl)

    const {data, error} = useSWR(baseUrl)

    if(!data) return <p>Loading ........</p>
    if(error) return <p>Error loading ........</p>

    console.log('Rent-data', data)
  return (
    <Container>
    <Row flexWrap={'wrap'} className={styles.flexcon} >

      
       {
        data.slice(0, 6).map((item, index)=>(
          <Col sm={6} md={4} m='auto' p='0'>
            {
              item.category ==='rent'?  <Post  item={item} key={index}/>: null
            }
        </Col>
        ))
       }
        
    </Row>
    </Container>
  )
}

export default Rent

/*export const Post = ({item}) =>{

  console.log('Itemready', item)

    return(
    <Link href={`/property/${item.id}`}>
    <Flex className={styles.banner_container} >
    <Image src={item.cover_photo? item.cover_photo: DefaultImage} width={300} height={200} alt='banner'/>
    <Box w='full'>
         <Flex className={styles.innerFlex}>
              <Flex alignItems='center'>
                    <Box  color='green'>{item.is_verify === true ? <GoVerified/> : <GoUnverified className={styles.unverfy}/>}</Box>
                     <Text fontWeight='600' fontSize='sm'>NGN {item.price}/{item.rent_frequency}</Text>
                     </Flex>
                    <Box>
                        <Avatar size='sm' src={item.agency}/>
                    </Box>
         </Flex>
         <Flex alignItems='center' justifyContent='space-between' w='250px'>
            {item.rooms} <FaBed/> | {item.baths} <FaBath/>| {millify(item.area)} sqft <BsGridFill/> 
          </Flex>
          <Text fontSize='lg'>
              {item.title}
          </Text>
    </Box>
 </Flex>
 </Link>
    )

}
*/