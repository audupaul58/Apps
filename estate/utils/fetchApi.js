import axios from 'axios'


export const baseUrl = "bayut.p.rapidapi.com"

/*
*/
export const fetchApi = async(url) =>{
    const {data} = await axios.get((url, {
        headers: {
            'X-RapidAPI-Key': 'feadf1932cmshda0e2fd4c1e28b9p13e3e1jsn6f71cc866113',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    }))
    return data
}