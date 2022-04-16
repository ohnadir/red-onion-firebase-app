import React, { useContext } from 'react';
import { CartContext } from '../../App';
import SelectedItem from '../SelectedItem/SelectedItem';

const Cart = () => {
    const [cart] = useContext(CartContext);
    return (
        <div>
            <h2>This is cart {cart.length}</h2>
            <div className='flex flex-col gap-8'>
                {
                    cart.map(food => <SelectedItem
                        key={food.id}
                        food={food}
                    ></SelectedItem>)
                }
            </div>
        </div>
    );
};

export default Cart;