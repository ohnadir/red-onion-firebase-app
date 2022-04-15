import React from 'react';

const Lunch = ({lunch}) => {
    const { img, name, price, blogs } = lunch;
    return (
        <div>
            <div className='mx-auto  w-[310px] hover:shadow-xl p-3 '>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[200px]' src={img} alt="" />
                    <p className='text-center'>{name}</p>
                    <p className='text-sm'>{blogs}</p>
                    <p className='font-bold text-xl'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Lunch;