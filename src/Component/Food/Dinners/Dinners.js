import React from 'react';
import dinner1 from '../../../images/dinner/dinner1.png' 
import dinner2 from '../../../images/dinner/dinner2.png'
import dinner3 from '../../../images/dinner/dinner3.png'
import dinner4 from '../../../images/dinner/dinner4.png'
import dinner5 from '../../../images/dinner/dinner5.png'
import dinner6 from '../../../images/dinner/dinner6.png'
import Dinner from './Dinner';
const dinners = [
    { id: 101, name: "Salmon with Grapefruit and Lentil Salad", blogs: "How We dream about out future", price: 9.99, img:dinner1 },
    { id: 102, name: "lemony Salmon Piccata", blogs: "How We dream about out future", price: 10.99, img:dinner2 },
    { id: 103, name: "Pork Tenderloin With Quinoa Pilaf", blogs: "How We dream about out future", price: 12.99, img:dinner3 },
    { id: 104, name: "French fries with cheese", blogs: "How We dream about out future", price: 8.99, img:dinner4 },
    { id: 105, name: "Garlic Butter Baked Salmon", blogs: "How We dream about out future", price: 6.99, img:dinner5 },
    { id: 106, name: "Baked Chicken", blogs: "How We dream about out future", price: 9.99, img:dinner6 },
    
]



const Dinners = () => {
    return (
        <div>
            <div className='lg:max-w-5xl mx-auto gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl sm:max-w-xl '>
                {
                    dinners.map(dinner => <Dinner
                        key={dinner.id}
                        dinner={dinner}
                    ></Dinner>)
                }
            </div>
        </div>
    );
};

export default Dinners;