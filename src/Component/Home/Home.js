import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/bannerbackground.png'
import Breakfasts from '../Food/Breakfast/Breakfasts';
import Dinners from '../Food/Dinners/Dinners';
import Lunchs from '../Food/Lunch/Lunchs';
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
        </div>
    );
};

export default Home;