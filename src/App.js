
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Appointment from './components/Appointment'
import Treatments from './components/Treatments';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Login from './components/Login';
import TestImage from './components/TestImage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path={'/'} element ={<Home/>}/>
        <Route path={'/treatment'} element ={<Treatments/>}/>
        <Route path={'/contact'} element ={<Contact/>}/>
        <Route path={'/testimg'} element ={<TestImage/>}/>
        <Route path={'/appointment'} element ={<Login/>}/>
               
      </Routes>
    <Footer/>

      </BrowserRouter>
      
   
    </div>
  );
}

export default App;

