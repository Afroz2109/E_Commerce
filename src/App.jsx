import { useEffect, useState } from 'react';
import './App.css';
import { Container, Navbar, Button } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Logo from './assets/logo.png';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductsInfo from './components/ProductsInfo';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CartLog from "./assets/carts.png";

function App() {
  const navigate = useNavigate(); 
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setUser(userEmail);
    }
  }, []);

  const handleAddToCart = (item) => {
    setCartItems({ ...cartItems, ...item });
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUser('');
    navigate('/login');
  };

  return (
    <div>
      <Navbar style={{ padding: '10px', borderBottom: '1px solid grey' }}>
        <Navbar.Brand
          onClick={() => navigate('/')}
          style={{ fontSize: '1rem', fontWeight: 'bold', color: 'purple', cursor: 'pointer' }}
        >
          <img className='logoimg' src={Logo} alt="" width="25" height="23" />
          INSTA BUY!
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <img
            onClick={() => navigate("/cart")}
            className='cartlogo'
            style={{ height: '24px', cursor: 'pointer' }}
            src={CartLog}
            alt="cart logo"
          />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Button className='Login' onClick={() => (user ? handleLogout() : navigate('/login'))}>
            {user ? 'Logout' : 'Login'}
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/products" element={<ProductsInfo />} />
        <Route
          path="/product/:id"
          element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
