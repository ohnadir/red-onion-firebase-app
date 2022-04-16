import React from 'react';

const Lunch = (props) => {
    const { img, name, price, blogs, id } = props.lunch;
    const { handleAddToCart } = props;
    return (
        <div>
            <div className='mx-auto  w-[310px] hover:shadow-xl p-3 '>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[200px]' src={img} alt="" />
                    <p className='text-center'>{name}</p>
                    <p className='text-sm'>{blogs}</p>
                    <p className='font-bold text-xl'>${price}</p>
                    <button onClick={()=>handleAddToCart(id)} className='mt-2 bg-red-500 px-8 py-[3px] text-white rounded'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Lunch;