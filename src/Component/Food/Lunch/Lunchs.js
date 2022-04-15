import React from 'react';
import lunch1 from '../../../images/lunch/lunch1.png';
import lunch2 from '../../../images/lunch/lunch2.png';
import lunch3 from '../../../images/lunch/lunch3.png';
import lunch4 from '../../../images/lunch/lunch4.png';
import lunch5 from '../../../images/lunch/lunch5.png';
import lunch6 from '../../../images/lunch/lunch6.png';
import Lunch from './Lunch';

const lunches = [
    {id:301, name:"Healthy Meal Plan", price:23.99, blogs:"How we dream about our future", img:lunch1},
    {id:302, name:"Fried Chicken Bento", price:9.99, blogs:"How we dream about our future", img:lunch2},
    {id:303, name:"Tarragon-Rubbed Salmon", price:6.99, blogs:"How we dream about our future", img:lunch3},
    {id:304, name:"Indian Lunch", price:8.99, blogs:"How we dream about our future", img:lunch4},
    {id:305, name:"Beef Steak", price:15.99, blogs:"How we dream about our future", img:lunch5},
    {id:306, name:"Honey-Soy-Glazes Salmon with peppers", price:7.99, blogs:"How we dream about our future", img:lunch6}
]
const Lunchs = () => {
    return (
        <div>
            <div className='lg:max-w-5xl mx-auto gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl sm:max-w-xl '>
                {
                    lunches.map(lunch => <Lunch
                        key={lunch.id}
                        lunch={lunch}
                    ></Lunch>)
                }
            </div>
        </div>
    );
};

export default Lunchs;