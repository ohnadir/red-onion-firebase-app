import React from 'react';
import useFoods from '../../Share/useFoods';
import Breakfast from './Breakfast';

const Breakfasts = () => {
    const [foods] = useFoods();
    return (
        <div>
            <div className='lg:max-w-5xl mx-auto gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl sm:max-w-xl '>
                {
                    foods.slice(0,6).map(breakfast => <Breakfast
                    key={breakfast.id}
                    breakfast={breakfast}
                    ></Breakfast>)
                }
            </div>
        </div>
    );
};

export default Breakfasts;