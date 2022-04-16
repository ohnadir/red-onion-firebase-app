import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import banner from '../../images/bannerbackground.png'
import Breakfasts from '../Food/Breakfast/Breakfasts';
import Dinners from '../Food/Dinners/Dinners';
import Lunchs from '../Food/Lunch/Lunchs';
import burger from '../.././images/adult-blur-blurred-background-687824.png';
import cook from '../.././images/chef-cook-food-33614.png';
import delivary from '../.././images/architecture-building-city-2047397.png';
import { AiFillCar } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { MdOutlineDeliveryDining } from 'react-icons/md';

const Home = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const handleGoToCart = () => {
        navigate('/cart');
    }
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
            <div className=''>
                <div>
                    <ul
                            class="my-10 nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4 justify-center"
                            id="pills-tab3"
                            role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button type="button" class="
                                        nav-link
                                        block
                                        font-medium
                                        text-xs
                                        leading-tight
                                        uppercase
                                        rounded
                                        w-full
                                        md:w-auto
                                        px-6
                                        py-3
                                        my-2
                                        md:mr-2
                                        focus:outline-none focus:ring-0
                                        active"
                                        id="pills-home-tab3"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home3"
                                        role="tab"
                                        aria-controls="pills-home3"
                                        aria-selected="true">Breakfast
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button type="button" class="
                                        nav-link
                                        block
                                        font-medium
                                        text-xs
                                        leading-tight
                                        uppercase
                                        rounded
                                        w-full
                                        md:w-auto
                                        px-6
                                        py-3
                                        my-2
                                        md:mx-2
                                        focus:outline-none focus:ring-0"
                                        id="pills-profile-tab3"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile3"
                                        role="tab"
                                        aria-controls="pills-profile3"
                                        aria-selected="false">Lunch
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button type="button" class="
                                        nav-link
                                        block
                                        font-medium
                                        text-xs
                                        leading-tight
                                        uppercase
                                        rounded
                                        w-full
                                        md:w-auto
                                        px-6
                                        py-3
                                        my-2
                                        md:ml-2
                                        focus:outline-none focus:ring-0"
                                        id="pills-contact-tab3"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact3"
                                        role="tab"
                                        aria-controls="pills-contact3"
                                        aria-selected="false">Dinner
                                    </button>
                                </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent3">
                            <div
                                class="tab-pane fade show active"
                                id="pills-home3"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab3">
                                    <Breakfasts></Breakfasts>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="pills-profile3"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab3">
                                    <Lunchs></Lunchs>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="pills-contact3"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab3">
                                    <Dinners></Dinners>
                            </div>
                    </div>
                </div>
            </div>
            {/* checkout Button */}
            <div className='text-center my-16'>
                <button onClick={handleGoToCart} className='text-center hover:bg-red-400 bg-red-500 px-8 py-[4px] rounded text-white'>Checkout Your Food</button>
            </div>
            <div className='lg:max-w-5xl mx-auto  md:max-w-2xl sm:max-w-xl mb-12'>
                <div>
                    <div className='mb-10'>
                        <h2 className=' text-4xl mb-5'>Why you choose us</h2>
                        <p className=''>Barton waited twenty always repair in within we do. An  delighted offending <br />
                            curiosity my is dashwoods at. Boy Prosperous increasing surrounded.
                        </p>
                    </div>
                    <div className='gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='shadow-xl rounded-2xl'>
                            <img className='p-2' src={burger} alt="" />
                            <div className='p-4'>
                                <p className='flex items-center'><AiFillCar className='text-white h-10 w-10 p-2 rounded-full bg-red-500 text-sm' /> <span className='ml-2 text-lg font-semi-bold'>Fast Delivery</span></p>
                                <div className='ml-10 mt-2'>
                                    <p className='text-gray-500 '>Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                                    <p className='flex items-center mt-3'><Link to='/details' className='text-blue-500'>See more</Link><AiOutlineArrowRight className='ml-4 w-6 h-6 bg-green-500 rounded-full text-white p-1'/></p>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-xl rounded-2xl'>
                            <img className='p-2' src={cook} alt="" />
                            <div className='p-4'>
                                <p className='flex items-center'><BsBellFill className='text-white h-10 w-10 p-2 rounded-full bg-red-500 text-sm' /> <span className='ml-2 text-lg font-semi-bold'>A Good auto Responder</span></p>
                                <div className='ml-10 mt-2'>
                                <p className='text-gray-500 '>Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                                    <p className='flex items-center mt-3'><Link to='/details' className='text-blue-500'>See more</Link><AiOutlineArrowRight className='ml-4 w-6 h-6 bg-green-500 rounded-full text-white p-1'/></p>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-xl rounded-2xl'>
                            <img className='p-2' src={delivary} alt="" />
                            <div className='p-4'>
                                <p className='flex items-center'><MdOutlineDeliveryDining className='text-white h-10 w-10 p-2 rounded-full bg-red-500 text-sm' /> <span className='ml-2 text-lg font-semi-bold'>Home Delivery</span></p>
                                <div className='ml-10 text-sm mt-2'>
                                    <p className='text-gray-500 '>Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                                    <p className='flex items-center mt-3'><Link to='/details' className='text-blue-500'>See more</Link><AiOutlineArrowRight className='ml-4 w-6 h-6 bg-green-500 rounded-full text-white p-1'/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;