import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation to access current URL
import logo from '../../../../../assets/flyawayLogo.png';


const NavSecond = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const location = useLocation(); // Get the current location (URL)
    const [activeNav, setActiveNav] = useState(location.pathname); // Initialize with the current pathname

    // Array of navigation items
    const navItemsArray = [
        { id: '/', navItem: 'Home' },
        { id: '/about', navItem: 'About' },
        { id: '/faq', navItem: 'FAQ' },
        { id: '/contact', navItem: 'Contact Us' },
    ];

    useEffect(() => {
        // When the location changes, update the activeNav state
        setActiveNav(location.pathname);
    }, [location]); // This effect will run whenever the location (URL) changes

    return (
        <div className={`px-1 md:px-3 py-2 lg:py-0 h-16 2xl:h-20 shadow-md bg-white sticky top-0 z-10`}>
            <div className='w-[95%] lg:w-[85%] h-full 2xl:py-[10px] px-0 mx-auto flex justify-between items-center'>
                <div className='flex justify-center items-center w-[120px] md:w-[100px] md:h-[90%] '>
                    <a href="/"><img src={logo} alt="Logo" width="full" height="full" />
                    </a>
                </div>
                {toggle ? (
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-2xl lg:hidden block' />
                ) : (
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-2xl lg:hidden block' />
                )}
                <div className='lg:flex hidden justify-between w-[50%] items-center'>
                    <ul className='flex justify-center mb-3 items-center gap-x-4 2xl:gap-x-8'>
                        {navItemsArray.map((item, index) => (
                            <li
                                key={index}
                                className="px-2 nav-link h-fit font-semibold hover:text-[#1D4ED8] transition duration-300"
                                onClick={() => setActiveNav(item.id)} // Update activeNav on click
                            >
                                <a
                                    href={item.id}
                                    className="text-sm 2xl:text-base block w-full h-fit font-semibold"
                                    style={{
                                        color: activeNav === item.id ? '#e49e1b' : '', // Highlight active item
                                    }}
                                >
                                    {item.navItem}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center items-center h-full w-fit gap-4">
                        <div
                            className="flex md:hidden lg:flex items-center justify-center p-3 2xl:p-4 rounded-full bg-blue-900 text-white text-xl ring-white outline-blue-900 flash-icon"
                        >
                            <FaPhoneAlt />
                        </div>
                        <div
                            className="flex md:hidden lg:hidden items-center justify-center p-3 2xl:p-4 rounded-full bg-blue-900 text-white text-xl ring-white outline-blue-900 flash-icon"
                        >
                            <FaPhoneAlt />
                        </div>
                        <div className="text-left w-fit">
                            <h4 className='text-sm 2xl:text-base '>Phone Number</h4>
                            <a href="tel:+1963868389" className="font-semibold text-base 2xl:text-2xl">0196 386 8389</a>
                        </div>
                    </div>
                </div>

                {/* Responsive Menu */}
                <ul className={`duration-500 bg-white lg:hidden w-full h-screen fixed md:top-[6.5rem] top-20 ${toggle ? 'right-0' : '-right-full'} py-5`}>
                    {navItemsArray.map((item, index) => (
                        <li
                            key={index}
                            className={`hover:text-orange-500 hover:underline p-5 hover:cursor-pointer hover:bg-blue-100 text-left font-semibold`}
                            onClick={() => {
                                setActiveNav(item.id);
                                setToggle(false); // Close the menu after click
                                navigate(item.id);
                            }}
                            style={{
                                backgroundColor: activeNav === item.id ? '#22487f' : 'transparent',
                                color: activeNav === item.id ? 'white' : ''
                            }}
                        >
                            {item.navItem}
                        </li>
                    ))}
                    <div className='flex w-fit ms-2 mt-4 gap-4'>
                        <div
                            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full bg-blue-900 text-white text-xl mb-5 2xl:mb-2 ring-white outline-blue-900 flash-icon"
                        >
                            <FaPhoneAlt />
                        </div>
                        <div className="mb-5 2xl:mb-3 text-left w-fit">
                            <h4 className='text-sm 2xl:text-base '>Phone Number</h4>
                            <a href="tel:01963868389" className="font-semibold text-base 2xl:text-2xl">0196 386 8389</a>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default NavSecond;
