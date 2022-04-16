import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, } from "@fortawesome/free-solid-svg-icons"
import CustomLink from '../CustomLink/CustomLink';
import { BsCart2 } from 'react-icons/bs';
import logo from '../../images/logo2.png'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../App';
const Header = () => {
    const [open, setOpen] = useState(false);
    const [cart] = useContext(CartContext);
    const navigate = useNavigate();
    const handleLogo = () => {
        navigate('/home');
    }
    return (
        <div className="flex items-center h-14 px-6 justify-between shadow-xl text-black relative z-50">
            <div className=" text-center">
                <img onClick={handleLogo} className='w-24 cursor-pointer' src={logo} alt="" />
            </div>
            <div className="flex gap-4 ml-10 items-center hidden md:flex">
                <CustomLink className='flex relative' to='/cart'><BsCart2 /><span className='
                text-red-500 text-sm
                h-4 w-4 text-center
                flex items-center justify-center
                rounded-full p-2 absolute right-[-9px] top-[-13px] bg-red-100'>{cart.length}</span>
                </CustomLink>
                <CustomLink to='/login'>Login</CustomLink>
                <CustomLink className='bg-red-500 px-3 rounded-full py-[3px] text-white' to='/signup'>Sign Up</CustomLink>
            </div>
            <FontAwesomeIcon
                icon={open ? faTimes : faBars}
                onClick={() => setOpen(!open)}
                className="text-white w-6 h-6 cursor-pointer md:hidden"
            />
            {open && (
                <div className="bg-slate-600 absolute top-full left-0 flex flex-col w-full pb-8 md:hidden">
                    <div className=" flex gap-4 flex-col items-center text-xl">
                    <CustomLink to='/login'>Login</CustomLink>
                    <CustomLink to='/signup'>Sign Up</CustomLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;