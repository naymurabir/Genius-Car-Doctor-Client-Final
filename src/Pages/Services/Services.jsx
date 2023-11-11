import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {

    const [services, setServices] = useState([])

    const [search, setSearch] = useState('')

    const [asc, setAsc] = useState(true)

    // useEffect(() => {
    //     fetch('https://genius-car-doctor-server-side.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    useEffect(() => {
        fetch(`https://genius-car-doctor-server-side.vercel.app/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc, search])

    const handleSearch = e => {
        e.preventDefault()
        const searchText = e.target.search.value
        setSearch(searchText)
    }

    return (
        <div>
            <div className="text-center">
                <h3 className="text-xl font-bold text-[#FF3811]">Services</h3>
                <h1 className="text-3xl font-bold mt-2">Our Service Area</h1>
                <p className="text-sm mt-2">The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="flex justify-between">
                <div>
                    <button onClick={() => setAsc(!asc)} className="bg-[#FF3811] text-white font-semibold px-2 py-1 rounded">{asc ? 'Price: High to Low' : 'Price: Low to High'} </button>
                </div>

                <div>
                    <form onSubmit={handleSearch} className="flex">
                        <input name="search" type="text" placeholder="Search..." className="input input-bordered input-error w-full max-w-xs focus:outline-0" />
                        <button className="text-white bg-[#FF3811] px-4 py-3 rounded">Search</button>
                    </form>
                </div>
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