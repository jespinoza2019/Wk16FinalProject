///First imported css file used and other things need for this page to work 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
//Importing BrowserRouter and others for router
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom'
//Importing pages needed for this page 
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import Favorite from './pages/Favorite';
import Resource from './pages/Resource';
import Tips from './pages/Tips';
import RecipeCreate from './RecipeCreate';
import RecipeEdit from './RecipeEdit';
import RecipeDetail from './RecipeDetail';
//Importing for Footer and NavBar
import Footer from './components/Footer';
import NavBar from './components/NavBar';
//Function to use Router, Navbar and Footer on all pages
function App() {
  return (
    
   <Router>
    <NavBar sticky="top" />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/RecipeCreate' element={<RecipeCreate />}/>
      <Route path='/Favorite' element={<Favorite />}/>
      <Route path='/Resource' element={<Resource />}/>
      <Route path='/Tips' element={<Tips />}/>
      <Route path='/Favorite/RecipeCreate' element={<RecipeCreate/>} />
      <Route path='/Favorite/RecipeEdit/:recid' element={<RecipeEdit />} />
      <Route path='/Favorite/RecipeDetail/:recid' element={<RecipeDetail/>} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer fixed="bottom" />
   </Router>
   
  );
}

export default App;
