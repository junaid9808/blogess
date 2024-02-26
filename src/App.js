import './App.css';
import {BrowserRouter, Routes, Route} from'react-router-dom';
import Navbar from './Components/Navbar';
import LoginPage from './Components/LoginPage.js';
import SignUp from './Components/SignUp.js';
import Home from './Pages/Home.js';
import Write from './Pages/Write.js';
import Blogs from './Pages/Blogs.js';
import Blogdetailpage from './Pages/Blogdetailpage.js';
import About from './Pages/About.js';

function App() {
 
  // const islogin = localStorage.getItem('islogin' , true);
 
  return (

    <div className="App">


      <BrowserRouter>
    
    
      
     

     <Navbar  />
       
     {/* localdata={islogin} */}
       <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/SignUp" element={<SignUp/>} />
         <Route path="/LoginPage" element={ <LoginPage/>} />
         <Route path="/Write-blog" element={ <Write/>} />
         <Route path="/Blogs" element={ <Blogs/>} />
         <Route path="/Blog-detailpage/:id" element={ <Blogdetailpage/>} />
         <Route path="/About-page" element={ <About/>} />
        
       </Routes>
    
     </BrowserRouter>
    
    </div>
  );
}

export default App;
