import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const updateQuantity = (id, quantity) => {
        setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <AuthProvider>
            <Router>
                <nav>
                    <Link to="/">Products</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<ProductList addToCart={addToCart} />} />
                    <Route
                        path="/cart"
                        element={
                            <ProtectedRoute>
                                <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
