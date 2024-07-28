export default function HomeLogo() {
    return(
        <>
            <div className="bg-[url('../assets/home.webp')] bg-cover bg-no-repeat bg-center w-full h-[40rem] flex items-center justify-center max-md:h-[35rem] z-10">
                <div className="flex items-center justify-center flex-col space-y-4 px-4">
                    <div className="text-center space-y-4">
                        <h1><span className="text-white text-7xl font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-md:text-5xl max-sm:text-4xl relative">RENT A CAR NOW</span></h1>
                        <p><span className="text-md fott-semibold drop-shadow-md text-yellow bg-primary px-4 py-2 rounded-xl max-md:text-xs max-sm:text-xs">with delivery services</span></p>
                    </div>
                    <div className="bg-secondary rounded-xl flex flex-row px-8 py-4 md:space-x-4 justify-center items-center max-md:flex-col max-md:space-y-2 max-md:px-4 max-md:py-2">
                        <p><span className="text-white max-sm:text-sm">Rent Date</span></p>
                        <div className="border-solid border-l-2 border-l-white w-1 h-8 max-md:hidden"> </div>
                        <hr className="w-full bg-white text-white md:hidden"/>
                        <p><span className="text-white max-sm:text-sm">From:</span></p>
                        <input className="ring-primary rounded-lg focus:ring-2 focus:outline-none px-2 max-sm:text-sm" type="date" />
                        <p><span className="text-white max-sm:text-sm">To:</span></p>
                        <input className="ring-primary rounded-lg focus:ring-2 focus:outline-none px-2 m-0 max-sm:text-sm" type="date" />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="hover:stroke-tertiarySecondary icon icon-tabler icon-tabler-search" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D6BD98" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}