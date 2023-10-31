import frameImg from '../../assets/icons/Frame.png'


const SideBar = () => {
    return (
        <div>
            <div className='mt-5 lg:mt-10 bg-[#F3F3F3] p-6 rounded-md'>
                <h3 className='text-xl font-bold mb-2'>Services</h3>
                <div className='flex justify-between items-center bg-[#FF3811] text-white px-3 py-3 rounded-md'>
                    <h2>Full Car Repair</h2>
                    <img className='bg-white ' src={frameImg} alt="" />
                </div>

                <div className='flex justify-between items-center bg-white shadow-xl text-black font-semibold px-3 py-3 rounded-md mt-5'>
                    <h2>Engine Repair</h2>
                    <img className='bg-white ' src={frameImg} alt="" />
                </div>

                <div className='flex justify-between items-center bg-white shadow-xl text-black font-semibold px-3 py-3 rounded-md mt-5'>
                    <h2>Automatic Services</h2>
                    <img className='bg-white ' src={frameImg} alt="" />
                </div>

                <div className='flex justify-between items-center bg-white shadow-xl text-black font-semibold px-3 py-3 rounded-md mt-5'>
                    <h2>Engine Oil Change</h2>
                    <img className='bg-white ' src={frameImg} alt="" />
                </div>

                <div className='flex justify-between items-center bg-white shadow-xl text-black font-semibold px-3 py-3 rounded-md mt-5'>
                    <h2>Battery Charge</h2>
                    <img className='bg-white ' src={frameImg} alt="" />
                </div>
            </div>

            <div className='bg-black text-white px-4 py-6 my-5 rounded-md'>
                <h2 className='text-base font-bold mb-3'>Download</h2>
                <div>
                    <div className='flex justify-between items-center '>
                        <div>
                            <h3 className='text-sm font-bold'>Our Brochure</h3>
                            <p className='text-xs'>Download</p>
                        </div>
                        <img src={frameImg} alt="" />
                    </div>
                </div>

                <div className='flex justify-between items-center mt-3'>
                    <div>
                        <h3 className='text-sm font-bold'>Our Brochure</h3>
                        <p className='text-xs'>Download</p>
                    </div>
                    <img src={frameImg} alt="" />
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-semibold text-black'>Price: $250.00 </h2>
                <button className="bg-[#FF3811] text-white font-semibold md:px-5 md:py-2 rounded mt-2">Proceed Checkout</button>
            </div>
        </div>
    );
};

export default SideBar;