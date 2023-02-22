//Basic imports needed for home page 

import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

//Import for main imageS
import food from '../image/Pictures-HD-Food-Download.jpg'


//Used to button with links to go to pages
const Home = () => {
  return (
      <div className="d-grid gap-2 p-3 text-center ">
          <Image className='center shadow-4' alt='...'  fluid src={food}/>
        <h1> Enjoy Some of My Favorite Recipes</h1>
        <div className='front lg'>
          <Button variant="secondary"  size="lg" >
              <Link to={'/Favorite'}  >  See Favorites  </Link>
            </Button>
            <Button variant="dark" size="lg">
              <Link to={'/About'}  >  About Food  </Link>
            </Button>
        </div>

      </div>
  );
}

export default Home