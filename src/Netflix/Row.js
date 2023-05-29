import React from 'react'
import axios from 'axios' ;
import './Base_url.js'
import { useEffect,useState } from 'react';


function Row(props) {
    let[row,setrow]=useState([])
    let base_url=axios.create({
        baseURL:"https://api.themoviedb.org/3"
    })
    
    // let baseurl="https://api.themoviedb.org/3";
    const img_base_path = "https://image.tmdb.org/t/p/original";
    
    useEffect(()=>{
    

        async function rowimage(){
            let response=await(base_url.get(`${props.request}`))
            setrow(response.data.results)
        }
        console.log(row)
        rowimage()

       
        
    // axios.get(` ${baseurl}${props.request}`)
    // .then((response=>{

    //     setrow(response.data.results)
    //     // console.log(row)

    // }))
   
    
},[])

  return (
    <>
    <div className='row-container container'>
        <h2>{props.title}</h2>  
    <div className='images-container'>
    { 
        row.map((item)=>{
            return(
                <>
     <img  src={img_base_path+ item.poster_path} className={props.big?'big':'item_image'}></img>

    
     </>

         ) 
        })
    }
     </div>
     </div>
     </>
  )
}

export default Row