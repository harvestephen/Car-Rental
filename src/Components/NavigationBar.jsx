import Avatar from '../assets/image.webp'
import { useState } from 'react'
import { Link } from  'react-router-dom'

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
            <div className="sticky top-0 w-full h-14 bg-primary flex justify-center z-50">
                <div className="flex flex-row justify-between w-full max-w-screen-xl px-8">
                <div className='md:hidden w-8'></div>
                    <div className="flex justify-start items-center space-x-4">
                        <Link className="text-3xl text-tertiary" to="/home">Car Rental</Link>
                        <Link className="text-white text-lg hover:text-whiteSecondary max-md:hidden" to="/home/Cars">Cars</Link>
                        <Link className="text-white text-lg hover:text-whiteSecondary max-md:hidden" to="/home/About">About</Link>
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
                                    <Link className='text-secondary' to="/home/Profile">Profile</Link>
                                    <Link className='text-secondary' to="/home/Cars">Cars</Link>
                                    <Link className='text-secondary' to="/home/About">About</Link>
                                    <hr className='w-32'/>
                                    <Link className='text-secondary' to='/'>Logout</Link>
                                </div>
                            }
                        </div>
                        <div className='flex flex-col relative max-md:hidden'>
                            <button  onClick={ handleShowProfile } className='hover:after:content-[""] hover:after:absolute hover:after:w-11 hover:after:h-11 hover:after:rounded-full hover:after:bg-black hover:after:text-red-500 hover:after:right-0 hover:after:top-0 hover:after:opacity-20'><img src={Avatar} alt="avatar" className='rounded-full w-11 h-11 '/></button>
                            {
                                showProfile && 
                                <div className='bg-whiteSecondary w-44 absolute top-16 right-0 max-md:hidden rounded-md flex flex-col p-4 items-center space-y-2'>
                                    <Link className='text-secondary' to='/home/Profile'>Profile</Link>
                                    <hr className='w-32'/>
                                    <Link className='text-secondary' to='/'>Logout</Link>
                                </div>
                            }
                            
                        </div>
                        <Link className="text-white text-lg hover:text-whiteSecondary max-md:hidden" hidden>Login</Link>
                        <a className="text-white text-lg hover:text-whiteSecondary max-md:hidden" href="/" hidden>Signup</a>
                    </div>
                </div>
            </div>
        </>
    );
}