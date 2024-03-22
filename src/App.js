import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';

import Protected from './components/Protected';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Login />} />
     {/* <Route path="/products" element={<ProductList />} /> */}
<Route path='/products' element={<Protected><ProductList/></Protected>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
