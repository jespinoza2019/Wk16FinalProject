///Importing for react to work 
import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';

//Function to create what is needed to Edit recipe 
const RecipeEdit = () => {
  const { recid } = useParams();
  const[id,idchange]=useState("");
  const[name,namechange]=useState("");
  const[owner,ownerchange]=useState("");
  const[ingredients,ingredientschange]=useState("");
  const[instructions,instructionschange]=useState("");
  const navigate=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
    const recdata={id,name,owner,ingredients,instructions};
    //checkd used while creating page 
    //console.log({id,name,owner,ingredients,instructions});
//Creating function to Update Recipe using fetch and PUT from local server
    fetch ("http://localhost:8000/posts/" + recid,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body: JSON.stringify (recdata),
    }).then((res)=>{
        alert('Saved Successfully')
        navigate('/Favorite')
    }).catch ((err) => {
      console.log (err.message);
    },[])
  }
  //Function to Edit Recipe 
 useEffect(()=> {
    fetch ("http://localhost:8000/posts/"+recid).then((res) => {
      return res.json();
    }).then ((resp) => {
      idchange (resp.id);
      namechange (resp.name);
      ownerchange (resp.owner);
      ingredientschange (resp.ingredients);
      instructionschange (resp.instructions);

    }).catch ((err) => {
      console.log (err.message);
    })
    }, []);
  return (
    //Created form to update the recipes noting that ID is disabled as it is called in all other fields are required
    <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handlesubmit}>
              <div className='card' style={{"textAlign": "justify"}}>
                <div className='card-title'>
                  <h2>Edit Recipe</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Id</label>
                          <input value={id} disabled="disabled" className ="form-control"></input>
                        </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form-group">
                            <label>Name</label>
                            <input  value={name} onChange={e=>namechange(e.target.value)} className ="form-control"></input>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form-group">
                            <label>Owner</label>
                            <input  value={owner} onChange={e=>ownerchange(e.target.value)} className ="form-control"></input>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form-group">
                            <label>Ingredients</label>
                            <input  value={ingredients} onChange={e=>ingredientschange(e.target.value)} className ="form-control"></input>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form-group">
                            <label>Instructions</label>
                            <input  value={instructions} onChange={e=>instructionschange(e.target.value)} className ="form-control"></input>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form-group">
                            <button className="btn btn-success" type="submit">Save</button>
                            <Link to="/Favorite" className="btn btn-danger">Back</Link>
                          </div>
                      </div>
                    </div>
                  </div>
          </div>
        </form>
       </div>
      
    </div>

  );
}

export default RecipeEdit;