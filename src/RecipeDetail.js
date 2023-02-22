//Importing the necessary react files used on this page
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

//Creating variables using UseParams and UseStatein a function that are both empty to start with 
const RecipeDetail = () => {
  const { recid } = useParams();
  const[recdata, recdatachange]=useState({});
//Creating a function to read as part of CRUD. Always making sure it ends with an empty array to prevent it from loading more than once
 useEffect(()=> {
    fetch ("http://localhost:8000/posts/"+recid).then((res) => {
      return res.json();
    }).then ((resp) => {
      recdatachange (resp);
    }).catch ((err) => {
      console.log (err.message);
    })
    }, []);
  
  return (
    <div className='card'>
      <div className='card-title'>
      
      </div>
      <div className='card-body'></div>
      {recdata &&
      <div>

        <h3> Recipe Instructions for: {recdata.name}</h3> <p>{recdata.instructions}</p>
        </div>
      }
                            <div className="form-group">
                              
                              <Link to="/Favorite" className="btn btn-danger">Back to Recipes</Link>
                            </div>
    </div>
  );
}

export default RecipeDetail;