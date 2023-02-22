//Imported react and react-router-dom needed for this page
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
//Funtion that creates variables using useState and useNavigate as well as handle submit 

const RecipeCreate = () => {
  const[id,idchange]=useState("");
  const[name,namechange]=useState("");
  const[owner,ownerchange]=useState("");
  const[ingredients,ingredientschange]=useState("");
  const[instructions,instructionschange]=useState("");
  const navigate=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
    const recdata={name,owner,ingredients,instructions};
    //check as I was creating page
    //console.log({id,name,owner,ingredients,instructions});
//Function to Create (CRUD) a new recipe
    fetch ("http://localhost:8000/posts",{
      method:"Post",
      headers:{"content-type":"application/json"},
      body: JSON.stringify (recdata),
    }).then((res)=>{
        alert('Saved Successfully')
        navigate('/Favorite')
    }).catch ((err) => {
      console.log (err.message);
    },[])
    
  }
//Used a Form to add new Recipe with required fields and disabled the ID because it is an automatically created with every entry as a key
//Also used link to create back button 
  return (
    <div>
      <div className='row'>
          <div className='offset-lg-3 col-lg-6'>
              <form className='container' onSubmit={handlesubmit}>
                <div className='card' style={{"textAlign": "justify"}}>
                  <div className='card-title'>
                    <h2>Add New Recipe</h2>
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
                              <input required value={name} onChange={e=>namechange(e.target.value)} className ="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                              <label>Owner</label>
                              <input required value={owner} onChange={e=>ownerchange(e.target.value)} className ="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                              <label>Ingredients</label>
                              <input required value={ingredients} onChange={e=>ingredientschange(e.target.value)} className ="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                              <label>Instructions</label>
                              <input required value={instructions} onChange={e=>instructionschange(e.target.value)} className ="form-control"></input>
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
    </div>

  );
}

export default RecipeCreate