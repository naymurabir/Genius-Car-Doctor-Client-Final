import { useLoaderData } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const ServiceDetails = () => {
    const details = useLoaderData()

    const { img, title, description } = details
    return (
        <div>
            <img className="w-full h-[300px] rounded-md mt-5 lg:mt-10 hidden lg:block" src={img} alt="" />
            <div className="flex flex-col lg:flex-row justify-between lg:my-10 gap-10">
                <div className="lg:w-3/4 ">
                    <div className="mt-10 space-y-3">
                        <img className="w-full h-[250px]" src={img} alt="" />
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="text-xs font-semibold">{description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="bg-gray-200 px-4 py-6 rounded-md">
                            <h3 className="text-sm font-bold">Instant Car Services</h3>
                            <p className="text-xs font-normal mt-2">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className="bg-gray-200 px-4 py-6 rounded-md">
                            <h3 className="text-sm font-bold">24/7 Quality Service</h3>
                            <p className="text-xs font-normal mt-2">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className="bg-gray-200 px-4 py-6 rounded-md">
                            <h3 className="text-sm font-bold">Easy Customer Service</h3>
                            <p className="text-xs font-normal mt-2">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className="bg-gray-200 px-4 py-6 rounded-md">
                            <h3 className="text-sm font-bold">Quality Cost Service</h3>
                            <p className="text-xs font-normal mt-2">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/4">
                    <SideBar></SideBar>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;