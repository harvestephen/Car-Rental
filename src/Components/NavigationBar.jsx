import Avatar from '../assets/image.webp';
import { useState } from 'react';

export default function NavigationBar() {

    //Profile Pop-up
    const [ showProfile, setShowProfile ] = useState(false); 
    function handleShowProfile() {
        setShowProfile(!showProfile);
    }

    //show hamburger
    const [ showBurger, setShowBurger ] = useState(false);
    function handleShowBurger() {
        setShowBurger(!showBurger);
    }

    return(
        <>  
            <div className="sticky w-full h-14 bg-primary flex justify-center">
                <div className="flex flex-row justify-between w-full max-w-screen-xl px-8">
                <div className='md:hidden w-8'></div>
                    <div className="flex justify-start items-center space-x-4">
                        <a className="text-3xl text-tertiary" href="/">Car Rental</a>
                        <a className="text-white text-lg hover:text-whiteSecondary max-md:hidden" href="/">Cars</a>
                        <a className="text-white text-lg hover:text-whiteSecondary max-md:hidden" href="/">About</a>
                    </div>
                    <div className="flex justify-end items-center space-x-4">
                        <div className='md:hidden flex flex-col relative'>
                            <button onClick={ handleShowBurger }>
                                <svg xmlns="http://www.w3.org/2000/svg" className="hover:stroke-tertiary icon icon-tabler icon-tabler-menu-2 " width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 6l16 0" />
                                    <path d="M4 12l16 0" />
                                    <path d="M4 18l16 0" />
                                </svg>
                            </button>
                            {
                                showBurger && 
                                <div className='bg-whiteSecondary w-44 absolute top-16 right-0 rounded-md flex flex-col p-4 items-center space-y-2'>
                                    <a className='text-secondary' href='/'>Profile</a>
                                    <a className='text-secondary' href='/'>Cars</a>
                                    <a className='text-secondary' href='/'>About</a>
                                    <hr className='w-32'/>
                                    <a className='text-secondary' href='/'>Logout</a>
                                </div>
                            }
                        </div>
                        <div className='flex flex-col relative max-md:hidden'>
                            <button  onClick={ handleShowProfile } className='hover:after:content-[""] hover:after:absolute hover:after:w-11 hover:after:h-11 hover:after:rounded-full hover:after:bg-black hover:after:text-red-500 hover:after:right-0 hover:after:top-0 hover:after:opacity-20'><img src={Avatar} alt="avatar" className='rounded-full w-11 h-11 '/></button>
                            {
                                showProfile && 
                                <div className='bg-whiteSecondary w-44 absolute top-16 right-0 max-md:hidden rounded-md flex flex-col p-4 items-center space-y-2'>
                                    <a className='text-secondary' href='/'>Profile</a>
                                    <hr className='w-32'/>
                                    <a className='text-secondary' href='/'>Logout</a>
                                </div>
                            }
                            
                        </div>
                        <a className="text-white text-lg hover:text-whiteSecondary max-md:hidden" href="/" hidden>Login</a>
                        <a className="text-white text-lg hover:text-whiteSecondary max-md:hidden" href="/" hidden>Signup</a>
                    </div>
                </div>
            </div>
        </>
    );
}