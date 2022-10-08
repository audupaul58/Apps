import '../styles/globals.scss'
import {ChakraProvider} from '@chakra-ui/react'
import {SWRConfig} from 'swr'
import axios from 'axios';
import Head from 'next/head'
import Layout from '../components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
    }, []);

  return (
  <>

    <Head>
      
    </Head>
    <ChakraProvider>
     <SWRConfig value={{fetcher: (url) => axios.get(url).then(res => res.data)}}>
      <Layout>
         <Component {...pageProps} />
        </Layout>
    </SWRConfig>
    </ChakraProvider>
  </>
 
)
 
}

export default MyApp
