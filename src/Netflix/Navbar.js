import React, { useEffect, useState } from 'react'


function Navbar() {
  

  return (
    <>
    
    <div className='container nav'>
        <nav className='flex'>
        <img  src="https://truecostmovie.com/img/TTC/wp-content/uploads/2015/10/netflix_logo_digitalvideo-1.png"></img>
        <ul className='nav-list flex'>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Tv shows</li></a>
            <a href="#"><li>Movies</li></a>
            <a href="#"><li>Originals</li></a>
            <a href="#"><li>Recently Added</li></a>
            <a href="#"><li>Portfoliio</li></a>
        </ul>
        </nav>
        </div>
        {/* <div className='navparent'></div> */}
        
    </>
  )
}

export default Navbar