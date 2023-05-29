import React ,{useState} from 'react'
import './Netflix.css'
import Navbar from './Navbar.js'
import Row from './Row.js'
import Requests from './Request.jsx'
import Banner from './banner.js'

function Netflix() {
   
   

  return (
 <>
    <Navbar/>
    <Banner/>
    <Row 
    title="Netflix Originals"
    request={Requests.fetchNetflixOriginals}
    big={true}/>

    <Row 
    title="Top Rated"
    request={Requests.fetchTopRated}
      />
    <Row 
    title="Action Movies"
    request={Requests.fetchActionMovies}/>
    <Row 
    title="Comedy Movies"
    request={Requests.fetchComedyMovies}/>
    <Row 
    title="Horror Movies"
    request={Requests.fetchHorrorMovies}/>
    <Row 
    title="Romantic Movies"
    request={Requests.fetchRomanceMovies}/>
    <Row 
    title="Documnetaries"
    request={Requests.fetchDocumentaries}/>
   {/* <Requests/> */}
       

          {/*  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,	
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99` */}
         

       
        
        
    
    </>
  )
}


export default Netflix