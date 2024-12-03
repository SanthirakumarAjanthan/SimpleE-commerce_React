import React, { useContext, } from 'react';
import AuthContext from './AuthContext';
import '../App.css';

const ProductList = ({ addToCart }) => {
    const products = [
        { id: 1, name: 'Product 1', price: 50, description: 'Description of product 1', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 100, description: 'Description of product 2', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 200, description: 'Description of product 3', image: 'https://via.placeholder.com/150' },
        { id: 1, name: 'Product 4', price: 250, description: 'Description of product 1', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 5', price: 300, description: 'Description of product 2', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 6', price: 350, description: 'Description of product 3', image: 'https://via.placeholder.com/150' },
        { id: 1, name: 'Product 7', price: 400, description: 'Description of product 1', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 8', price: 450, description: 'Description of product 2', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 9', price: 550, description: 'Description of product 3', image: 'https://via.placeholder.com/150' },
    ];

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)} disabled={!user}>
                            {user ? 'Add to Cart' : 'Login to Add'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
