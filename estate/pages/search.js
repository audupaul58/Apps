import React, {useState} from 'react'
import {Box, Flex, Text, Icon, Button, Heading}  from '@chakra-ui/react';
import styles from '../components/Banner/Post/Post.module.scss'
import { BiSearchAlt2 } from "react-icons/bi";
import axios from 'axios'
import useSWR from 'swr';
import Image from 'next/image'
import { Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import Post from '../components/Banner/Post/item';
import SearchFilter from '../components/Search/searchFilter'
import {Row, Col, Container} from 'react-bootstrap';




const baseUrl = "http://localhost:8000/properties/"


const Search = ({myList}) => {

    const router = useRouter()

    const {category} = router.query
    const {minPrice} = router.query
 
    const [searchFilter, SetsearchFilter] = useState(false)
    const [search, setSearch] = useState('')
    
    

    const {data : myItem, error} = useSWR(`${category? `${baseUrl}?price=${minPrice}&category=${category}`:baseUrl}`)

    if(!myItem) return <p><Spinner/></p>
    if(error) return <p>Error loading ........</p>

    const rentProperties = (item) =>{
        const result = myItem.filter((curr)=>{
            return curr.category === item
        })
        router.push(`/search?category=${item}`)
    }


    

    const filterSearch = () =>{
        SetsearchFilter(!searchFilter)
    }

  return (
    <Box>
        <div className={styles.searchBox} onClick={filterSearch}  >
                <SearchFilter text={search} result={setSearch}/>
            <h6 className={styles.searchHead}  color={'purple.800'} >{ category ? `PROPERTIES FOR ${router.query.category}`: 'Available Properties'}</h6>
           <div className={styles.cat_prop} > <p onClick={()=>rentProperties('sale')}>BUY PROPERTY</p>
            <p onClick={()=>rentProperties('rent')}>RENT PROPERTY</p></div>
        </div>

        
        
        <Container maxWidth={'1000px'} m='auto'>
      
        
        
        
        <Row flexWrap='wrap' className={styles.flexcon}>
              
               {myItem.filter((texts)=>{
                    return search.toLocaleLowerCase() === ''? texts : texts.title.toLocaleLowerCase().includes(search)
               })
               .map((item, index)=>(
                <Col sm={6} md={4} m='auto' p='0'>
                 <Post item={item} key={index}/>
                </Col>
               ))}
        </Row>
        { myItem.length === 0 && (
            <Flex className={styles.notFound}>
                <Image alt='Not found' width={400} height={300} src={'/images/404.avif'}/>
            </Flex>
        )}

    </Container>
    </Box>
  )
}


export const getServerSideProps = async ({query}) => {

  const category = query.category || 'rent'
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

    const myList = await axios.get(`http://localhost:8000/properties/?category=${category}`).then(res => res.data)

    return {
        props:{
            myList
        }
    }
    
}


export default Search


