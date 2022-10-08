import React from 'react'
import {Flex, Box, Center, useColorModeValue,
} from '@chakra-ui/react'
import styles from '../Post/Post.module.scss';
import useSWR from 'swr';
import Post from './item';
import {Row, Col, Container} from 'react-bootstrap';


const Sales = () => {

  const category = 'sale'

  const baseUrl = `http://localhost:8000/properties/?category=${category}`
    
  const {data, error} = useSWR(baseUrl)
    
  if(!data) return <p>Loading ........</p>
  if(error) return <p>Error loading ........</p>
    
  console.log('JustBuy', data)

  return (
    <Container>
    <Row flexWrap={'wrap'} className={styles.flexcon} >

      {
            data.map((item, index)=>(
              <Col sm={6} md={4} m='auto' p='0'>
              {
                <Post  item={item} key={index}/>
              }
          </Col>
            ))
      }
    </Row>

    
    </Container>
  )
}

export default Sales

/*export const Post = ({item}) =>{

      

      return(
            
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={320}
            objectFit={'cover'}
            src={item.images? item.images: DefaultImage}
          />
        </Box>
        <Stack pt={10} align={'center'} justifyContent={'space-around'}>
        <Flex className={styles.innerFlex} justifyContent='space-between' w='250px'>
        <Flex alignItems='center' >
             <Box  color='green'>{item.isVerify === true ? <GoVerified/> : <GoUnverified className={styles.unverfy}/>}</Box>
             <Heading  color={'purple.800'} fontSize={'sm'} textTransform={'uppercase'} fontWeight='800'>{item.title}</Heading>   
          </Flex>
          <Box>
            <Avatar size='sm' src={item.agency}/>
         </Box>
         </Flex>
          <Box direction={'row'} align={'center'}>
          <Flex alignItems='center' justifyContent='space-between' w='250px' color='gray.400'>
            {item.rooms} <FaBed/> | {item.baths} <FaBath/>| {millify(item.area)} sqft <BsGridFill/> 
          </Flex>
         
          <Text fontSize='md'>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'} fontWeight='800' >NGN {item.prices}{item.rentFrequency?`/${item.rentFrequency}`: 'M'}</Text>
          
          <Text>{item.description}</Text>
          </Text>

          </Box>
        </Stack>
      </Box>
    </Center>
  );
           
  
  }
  */
  