import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logo2.png'
const Signup = () => {
    return (
        <div className='flex justify-center items-center h-[93vh]'>
            <div className='w-[500px] shadow-xl p-4'>
                <form onSubmit={(event) => event.preventDefault()}>
                    <div className='flex justify-center  mb-14'>
                        <img className='w-[250px]' src={logo2} alt="" />
                    </div>
                    <div className='mb-8'>
                        <input className='w-full bg-zinc-100 p-2 outline-none' type="text" placeholder='Name' />
                    </div>
                    <div className='mb-8'>
                        <input className='w-full bg-zinc-100 p-2 outline-none' type="Email" placeholder='Email' />
                    </div>
                    <div className='mb-8'>
                        <input className='w-full bg-zinc-100 p-2 outline-none' type="password" placeholder='Password' />
                    </div>
                    <div className='mb-8'>
                        <input className='w-full bg-zinc-100 p-2 outline-none' type="password" placeholder='Confirm Password' />
                    </div>
                    <button className='bg-red-500 text-white w-full py-2 rounded'>Sign in</button>
                    <p className='mt-2 text-sm  text-center'>Already have an account ? <Link className='text-red-500' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;