import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import styles from './searchfilter.module.scss';


const searchFilter = ({text, result}) => {

  const handleSearch =(e)=>{
    result(e.target.value.toLowerCase())
  }

  return (
   
       <div alignItems={'center'} justifyContent='space-between' maxWidth ='500px' className={styles.search_prop}>
             
             <form>
             <BiSearchAlt2 />
             <input type="search" value={text} onChange={handleSearch} className={styles.searchInput} placeholder='Filter by Types, Location, Facilities, Neibourhood  etc'/>
                   
              </form>
        </div>
      
  
  )
}

export default searchFilter



