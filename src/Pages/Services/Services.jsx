import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className="text-center">
                <h3 className="text-xl font-bold text-[#FF3811]">Services</h3>
                <h1 className="text-3xl font-bold mt-2">Our Service Area</h1>
                <p className="text-sm mt-2">The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 lg:my-10">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className="text-center">
                <button className=" text-[#FF3811] font-semibold btn btn-outline hover:bg-[#f3411d]">More Services</button>
            </div>

        </div>
    );
};

export default Services;