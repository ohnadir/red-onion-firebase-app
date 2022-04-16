import React, { useContext, useState } from 'react';
import { CartContext } from '../../../App';
import useFoods from '../../Share/useFoods';
import Lunch from './Lunch';

const Lunchs = () => {
    const [foods] = useFoods();
    const [cart, setCart] = useContext(CartContext);
    const handleAddToCart = (id) => {
        let newCart = [];
        const rest = foods.find(food => food.id === id);
        newCart = [...cart, rest];
        setCart(newCart);
        console.log(cart);
    }
    return (
        <div>
            <div className='lg:max-w-5xl mx-auto gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl sm:max-w-xl '>
                {
                    foods.slice(6,12).map(lunch => <Lunch
                        key={lunch.id}
                        lunch={lunch}
                        handleAddToCart={handleAddToCart}
                    ></Lunch>)
                }
            </div>
        </div>
    );
};

export default Lunchs;