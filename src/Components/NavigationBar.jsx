import Avatar from '../image.webp';

export default function NavigationBar() {
    return(
        <>  
            <div className="sticky w-full h-14 bg-primary flex justify-center">
                <div className="flex flex-row justify-between w-full max-w-screen-xl">
                    <div className="flex justify-start items-center space-x-4">
                        <a className="text-3xl text-tertiary" href="/">Car Rental</a>
                        <a className="text-white text-lg hover:text-whiteSecondary" href="/">Cars</a>
                        <a className="text-white text-lg hover:text-whiteSecondary" href="/">About</a>
                    </div>
                    <div className="flex justify-end items-center space-x-4">
                        <img src={Avatar} alt="avatar" className='rounded-full w-11 h-11' hidden/>
                        <a className="text-white text-lg hover:text-whiteSecondary" href="/">Login</a>
                        <a className="text-white text-lg hover:text-whiteSecondary" href="/">Signup</a>
                    </div>
                </div>
            </div>
        </>
    );
}