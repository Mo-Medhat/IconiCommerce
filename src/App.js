import { Route, Routes } from 'react-router-dom';
import './App.css';
import { APIContextProvider } from './Components/Context/APIContext';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';



function App() {
  return <>
    <APIContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/IconiCommerce' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<>
          <div className='text-center vh-100 mt-5 pt-5'>
            <h1 className='pt-5 mt-5 px-2 error'>4 0 4</h1>
          </div>
        </>}/>
      </Routes>
      <Footer/>
    </APIContextProvider>
  </>
}

export default App;
