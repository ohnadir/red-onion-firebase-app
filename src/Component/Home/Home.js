import React from 'react';
import banner from '../../images/bannerbackground.png'
const Home = () => {
    return (
        <div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs"'>
            <img className='z-0 ' src={banner} alt="" />
            <div  className='flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed sub-header'>
                <div>
                    <h1 className='mb-4 text-4xl'>Best Food waiting for your belly</h1>
                    <div className='flex bg-white pl-4 rounded-full w-[400px] justify-between items-center mx-auto'>
                        <input className='outline-0 ' type="text" placeholder='Search food Items' />
                        <button className='bg-red-500 rounded-full px-5 py-2 text-white'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;