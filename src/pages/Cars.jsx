export default function Cars() {
    return(
        <>
            <div className="w-full h-10 flex justify-center mt-8 px-8">
                <div className="w-full max-w-7xl h-10 flex justify-center">
                    <div className="w-full flex flex-row space-x-4 border-b-[1px]">
                        <button className="font-light">All</button>
                        <button className="font-light">Sedan</button>
                        <button className="font-light">Van</button>
                        <button className="font-light">SUV</button>
                        <button className="font-light">Offroad</button>
                    </div>
                </div>
            </div>
            <div className="w-full flex mt-4 flex-col items-center">
                <div className="w-full max-w-7xl h-10 flex flex-col px-4 space-y-2">
                    <div className="flex justify-between bg-whiteSecondary p-4 rounded-md">
                        <div className="flex flex-row space-x-4">
                            <p className="font-bold">Honda Civic</p>
                            <p>stock: 4</p>
                        </div>
                        <button className="px-4 bg-tertiary font-light rounded-lg">Rent</button>
                    </div> 
                    <div className="flex justify-between bg-whiteSecondary p-4 rounded-md">
                        <div className="flex flex-row space-x-4">
                            <p className="font-bold">Honda Civic</p>
                            <p>stock: 4</p>
                        </div>
                        <button className="px-4 bg-tertiary font-light rounded-lg">Rent</button>
                    </div> 
                    <div className="flex justify-between bg-whiteSecondary p-4 rounded-md">
                        <div className="flex flex-row space-x-4">
                            <p className="font-bold">Honda Civic</p>
                            <p>stock: 4</p>
                        </div>
                        <button className="px-4 bg-tertiary font-light rounded-lg">Rent</button>
                    </div> 
                </div>
            </div>  
            
        </>
    )
};