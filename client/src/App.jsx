import React from 'react';
import RegisterCard from "./components/RegisterCard.jsx";
import ForgotPasswordCard from "./components/ForgotPasswordCard.jsx";

const App = () => {
    const [isLoginSectionVisible, setIsLoginSectionVisible] = React.useState(false);
    const [isForgotPasswordActive, setIsForgotPasswordActive] = React.useState(false);

    const registerHandler = () => {
        setIsLoginSectionVisible(!isLoginSectionVisible);
        setIsForgotPasswordActive(false);  // Ensure it resets when opening login
    };

    return (
        <>
            {/* Navbar */}
            <div className="w-full h-[100px] bg-[#000000] flex justify-between items-center px-6 text-white lg:px-28 select-none">
                <div className='w-[50px] h-[30px] mb-5 flex flex-col justify-between cursor-pointer'>
                    <div className='w-full h-[3px] bg-transparent'></div>
                    <div className='w-full h-[3px] bg-white rounded-lg'></div>
                    <div className='w-full h-[3px] bg-white rounded-lg'></div>
                </div>
                <div>
                    <img src='/Heading.png' className='w-auto h-auto' />
                </div>
                <div>
                    <button
                        onClick={registerHandler}
                        className='bg-[#000000] text-white px-4 py-1 rounded-2xl border-[1px] border-white hover:bg-white hover:text-[#0F0F0F] cursor-pointer'>
                        Register
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <div className='w-full h-[calc(100vh-100px)] text-white relative select-none'>
                <div className='absolute left-1/2 transform -translate-x-1/2 pt-16 text-7xl text-center w-[70vw]'>
                    <h1>Discover the world on wheels with our car rental service</h1>
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <img className='w-full h-full object-cover' src='/car.png' alt='car' />
                </div>
            </div>

            {/* Login / Forgot Password Section */}
            {isLoginSectionVisible && (
                <div className='z-10 text-white absolute top-0 left-0 w-full h-full bg-[#000000]/55 flex justify-center items-center '>
                    <div>
                        {isForgotPasswordActive ? (
                            <ForgotPasswordCard
                                setIsLoginSectionVisible={setIsLoginSectionVisible}
                                setIsForgotPasswordActive={setIsForgotPasswordActive}
                            />
                        ) : (
                            <RegisterCard
                                data={"username"}
                                cardText={"Login"}
                                isForgotPasswordVisible={true}
                                setIsLoginSectionVisible={setIsLoginSectionVisible}
                                setIsForgotPasswordActive={setIsForgotPasswordActive}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
