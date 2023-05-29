
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Requests from './Request.jsx'



function Banner() {
  
  let[banner, setbanner]=useState([])
  let [navborder,setnavborder]=useState('')

  let baseurl="https://api.themoviedb.org/3";
  const img_base_path = "https://image.tmdb.org/t/p/original";
  // console.log(baseurl + Requests.fetchNetflixOriginals)
  useEffect(()=>{
    
     async function getdata(){
      let randomimage= await axios.get(` ${baseurl}${Requests.fetchHorrorMovies}`)
      console.log(randomimage)
      setbanner(randomimage.data.results[Math.floor(Math.random()*randomimage.data.results.length)])
      console.log(banner)

  }
  getdata()

  
  
},[])

// window.onscroll=()=>{
//   console.log(window.scrollY)
// }

//*onscroll

window.onscroll=()=>{
//  or  (window.scrollY>200)? setnavborder('navparent'):setnavborder('')
    setnavborder((window.scrollY>200)?'navparent':'')
}


 
      

  return (
    <>
    <div className='banner'>
      {/* <div className='top-border' onScroll={myfunction}></div> */}
      
        <div style={{backgroundImage:`url(${img_base_path}${banner.backdrop_path})`,
         backgroundSize:"cover ",
         backgroundAttachment:"fixed",
        height:"94vh"
       
      }}>
        <div className='left-banner'>

        <h1>{banner.original_title}</h1>
        <div className='btns'>
          <a href=""><button>Play</button></a>
          <a href=""><button>My list</button></a>
        </div>
        <p className='overview'>{banner.overview}</p>

      </div>
        
        </div>
    </div>
    {/* <div className={(navborder>200)?'navparent':''}></div> */}
    <div className={navborder} ></div>

         </>
  )
}

export default Banner   