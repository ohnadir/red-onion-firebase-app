import React from 'react';
import useFoods from '../../Share/useFoods';
import Dinner from './Dinner';

const Dinners = () => {
    const [foods] = useFoods();
    return (
        <div>
            <div className='lg:max-w-5xl mx-auto gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl sm:max-w-xl '>
                {
                    foods.slice(12,18).map(dinner => <Dinner
                        key={dinner.id}
                        dinner={dinner}
                    ></Dinner>)
                }
            </div>
        </div>
    );
};

export default Dinners;