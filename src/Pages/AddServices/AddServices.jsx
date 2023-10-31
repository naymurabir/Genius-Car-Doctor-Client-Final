
const AddServices = () => {
    return (
        <div>
            <form >
                <div className="bg-gray-100 lg:w-2/4 mx-auto p-5 my-5 rounded">

                    <h2 className="text-xl font-bold text-[#FF3811] text-center mb-5">Add New Service</h2>

                    <div className="flex flex-col md:flex-row gap-5 justify-between ">
                        <input name="title" type="text" placeholder="Title..." className="input input-bordered input-error w-full max-w-xs text-xs" />

                        <input name="type" type="text" placeholder="Type..." className="input input-bordered input-error w-full max-w-xs text-xs" />
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row gap-5 justify-between mt-5">
                            <input name="img" type="text" placeholder="Image..." className="input input-bordered input-error w-full max-w-xs text-xs" />

                            <input name="price" type="text" placeholder="Price..." className="input input-bordered input-error w-full max-w-xs text-xs" />
                        </div>
                        <div>
                            <textarea className="h-[100px] mt-5 w-full textarea textarea-warning text-xs" name="description" id="" cols="30" rows="10" placeholder="Description..."></textarea>
                        </div>
                    </div>
                    <button className="bg-[#FF3811] text-white font-semibold px-3 py-2 rounded w-full mt-4">Add Service</button>

                </div>
            </form>
        </div>
    );
};

export default AddServices;