import React, {useState} from 'react'
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified, GoUnverified} from 'react-icons/go'
import millify from 'millify'
import {Flex, Box,  Text, Avatar, Grid, Heading} from '@chakra-ui/react'
import useSWR from 'swr';
import { useRouter } from 'next/router'
import { Carousel } from "react-responsive-carousel";
import styles from '../components/Banner/Post/Post.module.scss'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/Link'
import {Row, Col, Container} from 'react-bootstrap';




const DetailsPage = () => {

    const router = useRouter()

    const {id} = router.query

    const baseUrl = `http://localhost:8000/properties/${id}`

    const {data, errors} = useSWR(id ? baseUrl: null)

    if(!data) return <p>Data is Loading please wait</p>
    if(errors) return <p>No Data please try again</p>

  
  
  

  return (
  
    <Container maxWidth={'1000px'} p="4" margin={'auto'} >
      <Grid alignItems='center' justifyContent='center' textAlign='center' bgColor ='green-200' >
      <Carousel>
      {data.photos.map((photo, index )=>{
        return <><Image src={photo.images} width={'600'} height={350} key={index} /></>
      })}
     </Carousel>
      </Grid>
      <Box maxWidth={'900'} margin='auto' p="7">
      <Flex  alignItems={'center'} justifyContent='space-between'>
        <Flex  color='green-200' p='2'>
          {data.isVerify ? <GoVerified/> : <GoUnverified className={styles.unverfy}/> }
          <Text color={'purple.800'} marginLeft='3' fontSize={'sm'} textTransform={'uppercase'} fontWeight='800' >NGN {data.prices}{data.rentFrequency?`/${item.rentFrequency}`: 'M'}</Text>
      </Flex>  

        <Box>
          <Avatar size='sm' src={data.agency}/>
       </Box>
       </Flex>
        <Box direction={'row'} >
        <Flex alignItems='center' justifyContent={'space-evenly'} maxWidth='400px'  color='gray.400'>
         {data.rooms} <FaBed/> | {data.baths} <FaBath/>| {millify(data.area)} sqft <BsGridFill/> 
        </Flex>
       
        <Text fontSize='md'>
        
        <Text fontWeight='800' fontSize='lg' color='purple.800'  >{data.title}</Text>
        <Text>{data.description}</Text>
        </Text>

        </Box>
      
      <Box paddingTop='4'  textTransform={'uppercase'}>
        <Text textAlign={'center'} fontSize={'sm'} fontWeight='bold' color='gray'> Category:  Properties for {data.category}</Text>
            <Box> 
              {data.myamenity.length ? <Text fontSize={'sm'} fontWeight='bold'>Amenities</Text>: ""}
                <Flex flexWrap={'wrap'} >
                  {data.myamenity.map((item, index)=>(
                    <Text className={styles.amenity}
                        key={index}>{item}

                    </Text>))}
                </Flex>
            </Box>
      </Box>
            <Box>
            <Text fontSize={'sm'} fontWeight={'bold'} marginTop='10'> Related Post</Text>
              <RelatedPost  myitem={data.category}/>
            </Box> 
      </Box>

     

 </Container>
  )
}

export default  DetailsPage

const RelatedPost = (item) =>{

  const [category, setCategory] = useState(item.myitem)

  const baseUrl = `http://localhost:8000/properties/?category=${category}`

  const {data, errors} = useSWR(baseUrl)


  if(!data) return <p>Data is Loading please wait</p>
  if(errors) return <p>No Data please try again</p>

  
  const randomI = arr => [...arr].sort(() => Math.random() - 0.5);

  const mydata = new randomI(data);

  const myList = mydata.slice(0, 5)
  console.log('mydata', myList);
    
  return (
    <Box>
            {data.length && myList.map((post)=>{
                      return <Link href={`${post.slug}`}>
                 <div>
                
                  <Box className={styles.related} color={'purple.800'} marginBottom ='4'>
                  <Image src={post.images} width={100} height={100} />
                  <Box w='full' marginInline={'2'}>
                  <Flex>
                  <Box  color='green'>{post.isVerify === true ? <GoVerified/> : <GoUnverified className={styles.unverfy}/>}</Box>
                  <h2>{post.title.length > 30 ? `${post.title.substring(0, 30)}...`: post.title}</h2> 
                    
                  </Flex>
                      <h2>NGN{post.prices}{post.rentFrequencies != 'None'? post.rentFrequencies : "M"}</h2> 
                      <Text>{post.description.length > 50 ? `${post.description.substring(0, 50)}...` : post.description }</Text> 
                  </Box>
                  </Box>
                 
                  </div>
              </Link>
            })}
    </Box>
  )
}

