import axios from "axios";
import Swal from "sweetalert2";

const AddServices = () => {

    const handleAddServices = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const title = form.get('title')
        const type = form.get('type')
        const img = form.get('img')
        const price = parseInt(form.get('price'))
        const description = form.get('description')
        const newService = { title, type, img, price, description }
        console.log(newService);

        axios.post('https://genius-car-doctor-server-side.vercel.app/services', newService)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "A new service has been added successfully.",
                        showConfirmButton: false,
                        background: '#343436',
                        heightAuto: '100px',
                        color: 'white',
                        timer: 2000
                    })
                    e.target.reset()
                }
            })
            .catch(error => {
                console.log("Error", error.message);
            })
    }

    return (
        <div>
            <form onSubmit={handleAddServices}>
                <div className="bg-gray-100 lg:w-2/4 mx-auto p-5 my-5 rounded">

                    <h2 className="text-xl font-bold text-[#FF3811] text-center mb-5">Add New Service</h2>

                    <div className="flex flex-col md:flex-row gap-5 justify-between ">
                        <input name="title" type="text" placeholder="Title..." className="input input-bordered input-error w-full max-w-xs text-xs" />

                        <input name="type" type="text" placeholder="Type..." className="input input-bordered input-error w-full max-w-xs text-xs" />
                    </div>

                    <div>
                        <div className="flex flex-col md:flex-row gap-5 justify-between mt-5">
                            <input name="img" type="text" placeholder="Image..." className="input input-bordered input-error w-full max-w-xs text-xs" />

                            <input name="price" type="number" placeholder="Price..." className="input input-bordered input-error w-full max-w-xs text-xs" />
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