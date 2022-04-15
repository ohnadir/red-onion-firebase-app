import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/bannerbackground.png'
import Dinners from '../Food/Dinners/Dinners';
const Home = () => {
    return (
        <div>
            <div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs"'>
                <img className='z-0 ' src={banner} alt="" />
                <div  className='flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed sub-header'>
                    <div>
                        <h1 className='mb-4 text-4xl'>Best Food waiting for your belly</h1>
                        <div className='flex bg-white pl-4 rounded-full justify-between items-center mx-auto'>
                            <input className='outline-0 ' type="text" placeholder='Search food Items' />
                            <button className='bg-red-500 rounded-full px-5 py-2 text-white'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-8 flex gap-10 justify-center'>
                <Link to='/breakfast'>Breakfast</Link>
                <Link to='/lunch'>Lunch</Link>
                <Link to='/dinner'>Dinner</Link>
            </div>
            <div>
                <div>
                    <Dinners></Dinners>
                </div>
            </div>
        </div>
    );
};

export default Home;