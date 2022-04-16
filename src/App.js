import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';

export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <CartContext.Provider value={[cart, setCart]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      </CartContext.Provider>
      
    </div>
  );
}

export default App;
