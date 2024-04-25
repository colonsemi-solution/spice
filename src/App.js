import './App.css';
import Home from '../src/modules/Home/pages/index'
import Contact from '../src/modules/Contact/pages/index'
import About from '../src/modules/About/pages/index'
import { Route, Routes } from 'react-router-dom';
import SpicesHeader from './Component/SpicesHeader';
import SpicesFooter from './Component/SpicesFooter';
import Catalog from '../src/modules/Catalog/pages';
import ProductDetail from '../src/modules/Productdetails/pages/index'

function App() {
  return (
    <>
    {/* <BrowserRouter> */}
    <SpicesHeader/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/product-details' element={<ProductDetail/>}/>
    </Routes>
    <SpicesFooter/>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
