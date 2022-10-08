import React from 'react'
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {Box, Flex, Text, Icon, Button, GridItem}  from '@chakra-ui/react';
import {GoVerified, GoUnverified} from 'react-icons/go'
import millify from 'millify'
import useSWR from 'swr';
import { useRouter } from 'next/router'

const DetailsPage = ({item}) => {

    const router = useRouter()

    const {id} = router.query

    const baseUrl = `http://localhost:4000/sales?property/${id}`

    console.log('baseUrl', baseUrl)

    const {data, errors} = useSWR(id ? baseUrl: null)

    if(!data) return <p>Data is Loading please wait</p>
    if(errors) return <p>No Data please try again</p>

    console.log('data', data)

  return (
    <Box maxWidth='1000px' m='auto' p='4'>
            {data.title}
    </Box>
  )
}

export default  DetailsPage