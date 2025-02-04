import React from 'react';
import { motion } from 'framer-motion';

const RegisterCard = ({ data, cardText, isForgotPasswordVisible, setIsLoginSectionVisible, setIsForgotPasswordActive }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className='w-[400px] h-auto bg-[#0F0F0F] border rounded-2xl p-6 text-white select-none'
        >
            {(cardText === "Login") ? (
                <div className='w-full h-full flex flex-col'>
                    <div className='flex items-center justify-between mb-7'>
                        <h1 className='text-2xl text-gray-300 '>User Login</h1>
                        <button className='cursor-pointer' onClick={() => setIsLoginSectionVisible(false)}>
                            <img src='/close.png' className='w-5 h-5'/>
                        </button>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label>Username</label>
                        <input className='border rounded-lg p-2' type='text' placeholder='Enter your Username' required={true}/>
                    </div>
                    <div className='flex flex-col gap-3 mt-5'>
                        <label>Password</label>
                        <input className='border rounded-lg p-2' type='password' placeholder='Enter your Password' required={true}/>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center gap-1'>
                            <input type='checkbox' className='accent-blue-500'/>
                            <label>Remember Me</label>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            {isForgotPasswordVisible && (
                                <button
                                    className='text-blue-500 hover:text-blue-600 cursor-pointer'
                                    onClick={() => setIsForgotPasswordActive(true)}
                                >
                                    Forgot Password?
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <button className='border rounded-lg px-6 py-2' type='submit'>
                            Login
                        </button>
                    </div>
                    <div className='flex items-center justify-center mt-5 mb-2'>
                        <span>Don't have an account? <button className='cursor-pointer text-blue-500 hover:text-blue-600'>Create one</button></span>
                    </div>
                </div>
            ) : (
                <div>Hello</div>
            )}
        </motion.div>
    );
};

export default RegisterCard;
