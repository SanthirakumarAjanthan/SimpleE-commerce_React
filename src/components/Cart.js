import React from 'react';

const Cart = ({ cart, updateQuantity, removeItem }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                                -
                            </button>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
