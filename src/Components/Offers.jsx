import Reliable from '../assets/reliable.png'
import Trusted from '../assets/trusted.png'
import Support from '../assets/support.png'

export default function Offers() {
    return(
        <>
            <div className="w-full flex flex-row justify-center mt-8 max-md:mt-4">
                <div className="flex flex-row max-md:flex-col justify-center space-x-16 max-w-5xl px-16 max-md:space-x-0 max-md:px-16 max-md:space-y-4 space-y-4 md:offers-style-child">
                    <div className="flex flex-col">
                        <span>
                            <img src={Reliable} alt="trusted" className='inline' width={48} height={48}/>
                            <p className="text-xl font-medium inline">Reliable</p>
                        </span>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo  dolor sit amet aliquet euismod. Quisque in sapien ut massa ultricies  mattis in id ligula. Ut consequat augue consequat, pharetra nulla non”</p>
                    </div>
                    <div className="flex flex-col">
                        <span>
                            <img src={Trusted} alt="Trusted" className='inline' width={48} height={48}/>
                            <p className="text-xl font-medium inline">Trusted</p>
                        </span>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo  dolor sit amet aliquet euismod. Quisque in sapien ut massa ultricies  mattis”</p>
                    </div>
                    <div className="flex flex-col">
                        <span>
                            <img src={Support} alt="Support" className='inline' width={48} height={48}/>   
                            <p className="text-xl font-medium inline">Support</p>
                        </span>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo  dolor sit amet aliquet euismod. Quisque in sapien ut massa ultricies  mattis in id ligula. Ut consequat augue consequat”</p>
                    </div>
                </div>
            </div>
        </>
    )
}