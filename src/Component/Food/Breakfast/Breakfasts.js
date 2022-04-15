import React from 'react';
import breakfast1 from '../../../images/breakfast/breakfast1.png'
import breakfast2 from '../../../images/breakfast/breakfast2.png'
import breakfast3 from '../../../images/breakfast/breakfast3.png'
import breakfast4 from '../../../images/breakfast/breakfast4.png'
import breakfast5 from '../../../images/breakfast/breakfast5.png'
import breakfast6 from '../../../images/breakfast/breakfast6.png'
import Breakfast from './Breakfast';

const breakfasts = [
    {id:201, name:"Bagel and cream cheese", price:6.99, blogs:"How we dream about our future", img:breakfast1},
    {id:202, name:"Breakfast sandwich", price:9.99, blogs:"How we dream about our future", img:breakfast2},
    {id:203, name:"Baked Chicken", price:10.99, blogs:"How we dream about our future", img:breakfast3},
    {id:204, name:"Eggs Benedict", price:8.99, blogs:"How we dream about our future", img:breakfast4},
    {id:205, name:"Toast Croissant Fried egg", price:19.99, blogs:"How we dream about our future", img:breakfast5},
    {id:206, name:"Full Breakfast Fried egg Toast Brunch", price:3.99, blogs:"How we dream about our future", img:breakfast6}
]
const Breakfasts = () => {
    return (
        <div>
            <div className='lg:max-w-5xl mx-auto gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl sm:max-w-xl '>
                {
                    breakfasts.map(breakfast => <Breakfast
                    key={breakfast.id}
                    breakfast={breakfast}
                    ></Breakfast>)
                }
            </div>
        </div>
    );
};

export default Breakfasts;