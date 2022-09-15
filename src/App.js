//import logo from './logo.svg';
//import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index';
import Gallery from './Pages/Gallery/index';
import ProductDetail from './Pages/ProductDetail/index';
import Shop from './Pages/Shop/index';
import Cart from './Pages/Cart/index';
import './Pages/global.css';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Home />
      <Shop />
      <Gallery />
      <ProductDetail />
      <Cart />
      
    {/* <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route  path='/Gallery' element={< Gallery />}></Route>
                 <Route  path='/ProductDetail' element={< ProductDetail />}></Route>
                 <Route  path='/Shop' element={< Shop />}></Route>
          </Routes> 
           */}
          
    </div>
  );
}
export default App;
