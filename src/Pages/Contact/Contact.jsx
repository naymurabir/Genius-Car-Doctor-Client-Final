import dateImg from '../../assets/icons/date.png'
import locationImg from '../../assets/icons/location.png'
import callImg from '../../assets/icons/call.png'

const Contact = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around p-5 md:p-16 gap-5 md:gap-5 lg:gap-5 rounded-md bg-[#151515] text-white my-5 lg:my-10">
                <div>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <img className='w-8' src={dateImg} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xs">We are open monday-friday</h3>
                            <h2 className="text-xl font-bold mt-1">7:00 am - 9:00 pm</h2>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <img className='w-8' src={callImg} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xs">Have a question?</h3>
                            <h2 className="text-xl font-bold mt-1">+2546 251 2658</h2>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <img className='w-8' src={locationImg} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xs">Need a repair? our address</h3>
                            <h2 className="text-xl font-bold mt-1">Liza Street, New York</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;