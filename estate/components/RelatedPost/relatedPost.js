import Image from 'next/image';



const RelatedPost = (item) =>{

    const baseUrl = `http://localhost:8000/properties/`
  
    console.log('baseUrl', baseUrl)
  
    const {data, errors} = useSWR(baseUrl)
  
    if(!data) return <p>Data is Loading please wait</p>
    if(errors) return <p>No Data please try again</p>
    
    console.log('sabaseUrl', data)
    
    return (
      <Box>
          <Flex>
              {data.length && data.map((post)=>{
                
                {(post.category == item)
                  return <Box>
                    <Image src={post.Images} width={200} height={100}/>
                     {post.title}
                    </Box>
                }
              })}
                
          </Flex>
      </Box>
    )
  }

  export default RelatedPost
  