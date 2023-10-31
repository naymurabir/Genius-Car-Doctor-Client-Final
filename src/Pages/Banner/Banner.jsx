
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[200px] md:h-[400px] lg:h-[450px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/R4c30t0/2.jpg" className="w-full rounded-md" />

                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
                        <div className="space-y-3 mt-14 ml-14 hidden md:block">
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">Affordable <br /> Price For Car <br />Servicing</h1>
                            <p className="text-sm font-normal text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

                            <div className="flex gap-5">
                                <button className="bg-[#FF3811] text-white font-semibold md:px-3 md:py-3 rounded">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold px-3 py-2 rounded"> Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9gjSNCw/3.jpg" className="w-full rounded-md" />

                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
                        <div className="space-y-3 mt-14 ml-14 hidden md:block">
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">Affordable <br /> Price For Car <br />Servicing</h1>
                            <p className="text-sm font-normal text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

                            <div className="flex gap-5">
                                <button className="bg-[#FF3811] text-white font-semibold md:px-3 md:py-3 rounded">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold px-3 py-2 rounded"> Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Ry9Yqc1/4.jpg" className="w-full rounded-md" />

                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
                        <div className="space-y-3 mt-14 ml-14 hidden md:block">
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">Affordable <br /> Price For Car <br />Servicing</h1>
                            <p className="text-sm font-normal text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

                            <div className="flex gap-5">
                                <button className="bg-[#FF3811] text-white font-semibold md:px-3 md:py-3 rounded">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold px-3 py-2 rounded"> Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/b1yF333/1.jpg" className="w-full rounded-md" />

                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
                        <div className="space-y-3 mt-14 ml-14 hidden md:block">
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">Affordable <br /> Price For Car <br />Servicing</h1>
                            <p className="text-sm font-normal text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

                            <div className="flex gap-5">
                                <button className="bg-[#FF3811] text-white font-semibold md:px-3 md:py-3 rounded">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold px-3 py-2 rounded"> Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;