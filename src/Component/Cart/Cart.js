import React, { useContext } from 'react';
import { CartContext } from '../../App';

const Cart = () => {
    const [cart] = useContext(CartContext);
    // console.log(cart);
    return (
        <div>
            <h2>This is cart {cart.length}</h2>
        </div>
    );
};

export default Cart;