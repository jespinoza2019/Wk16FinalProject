//Importing the necessary react code needed for this page
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

//Funtion to create const needed for useState and useNavigate
const Favorite = () => {
  const [recdata, recdatachange] = useState(null);
  const navigate=useNavigate();
//Function to go to Detail page
  const LoadDetail=(id) => {
    navigate("/Favorite/RecipeDetail/"+id);
  }
//Function to go to Edit page
  const LoadEdit=(id)=> {
    navigate("/Favorite/RecipeEdit/"+id);

  }
  //Funtion to Delete Recipes 
  const Removefunction=(id)=> {
    if(window.confirm('Do you really want to Delete?')){
      fetch ("http://localhost:8000/posts/" + id,{
        method:"DELETE",

      }).then((res)=>{
          alert('Saved Removed Successfully')
          window.location.reload();
      }).catch ((err) => {
        console.log (err.message);
      },[])
    }
  }
  //Function to go to Edit recipes and read json database on local server
  useEffect (() => {
    fetch ("http://localhost:8000/posts/"). then((res)=> {
      return res.json ();

    }).then ((resp)=> {
      recdatachange (resp);
    }).catch ((err) => {
      console.log (err.message);
    })
    },[])

    ///Used link to create a button to add a new recipe
    //Used Table to display recipes and to create buttons for each reciped to edit, remove or see instructions 
    //Need to map to bring data in from local server within table 
    //Call the functions created above in action column with buttons
  return (
    <div className="d-grid gap-2 p-3 text-center color:black" >
      <h1> Favorite Recipes</h1>

      <div className='card-body'>
        <div className='divbtn'>
         <Link  to='./RecipeCreate' className='btn btn-success'> Add New (+) </Link>
      </div>   
    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Owner</th>
          <th>Ingredients</th>
          <th>Instructions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {recdata &&
        recdata.map(item=> (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.owner}</td>
              <td>{item.ingredients}</td>
              <td>{item.instructions}</td>
              <td>
                <a onClick={()=>{LoadEdit(item.id)}} className='btn btn-success'>Edit</a>
                <a onClick={()=>{Removefunction(item.id)}}className='btn btn-danger'>Remove</a>
                <a onClick={()=>{LoadDetail(item.id)}} className='btn btn-success'>Instructions</a>
              </td>

            </tr>
            )
          )
        }
      </tbody>
     </Table>
   </div>
  );
}

export default Favorite