import React from 'react'
import Image from 'next/image';
import {Flex, Box, Text, Button, Grid, Container} from '@chakra-ui/react'
import styles from './Banner.module.scss';
import Sales from './Post/Sales';
import Rent from './Post/Rent';
import { useRouter } from 'next/router';

const Thead = () => {
  return (
    <Container maxWidth='1100px' className={styles.myMain}>
    <Box maxWidth='1000px' mt={10}   >
            <RentProp/>
            <Box marginTop={'5vw'} >
                { <Rent/>}
            </Box>
           
            
            <SaleProp/>
            <div  className={styles.mainCont} >
                { <Sales/>}
            </div>
    </Box>
</Container>
  )
}

export default Thead

export const RentProp = ({data}) =>{

    const router =  useRouter()

    const exploreAllProps = () =>{
        router.push('/search?category=rent')
    }
    return (
        <>
       
        <Flex className={styles.banner_container}>
             <Image src={'/images/index.jpg'} width={550} height={350} alt='banner' className={styles.image_wi}/>
            <Box p='5' fontSize='sm' color='gray' >
                 <Text  >Rent A Home</Text>
                 <Text fontWeight='bold' fontSize='lg' color='purple.800' f>Rental Appartments For All</Text>
                  <p>Click to explore more of our Properties</p>
                  <Button onClick={exploreAllProps} >Explore More</Button>
            </Box>
        </Flex>
        </>
    )
}

export const SaleProp = () =>{

    const router =  useRouter()

    const exploreAllProps = () =>{
        router.push('/search?category=sale')
    }

    return (
        <Flex className={styles.banner_container}>
                 <Image src={'/images/m1.jpg'} width={500}  height={350} alt='banner'/>
            <Box p='5' fontSize='sm' color='gray' >
                 <Text  >Buy A Home</Text>
                 <Text fontWeight='bold' fontSize='lg' color='purple.800' f>Dream Appartments For All</Text>
                  <p>Click to explore more of our Properties</p>
                  <Button onClick={exploreAllProps}>Explore More</Button>
            </Box>
        </Flex>
    )
}

