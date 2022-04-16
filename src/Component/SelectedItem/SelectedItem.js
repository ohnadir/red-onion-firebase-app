import React from 'react';
import { BsTrash } from 'react-icons/bs';
const SelectedItem = ({ food }) => {
    const { img, name, price } = food;
    return (
        <div className='w-[500px] border relative'>
            <div className='flex items-center'>
                <img src={img} className='w-[80px]' alt="" />
                <div className='ml-4'>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <BsTrash className='right-4 absolute' />
            </div>
        </div>
    );
};

export default SelectedItem;