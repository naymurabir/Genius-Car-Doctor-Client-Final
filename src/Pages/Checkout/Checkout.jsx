import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    const loadedCheckout = useLoaderData()
    const { price, img, title } = loadedCheckout

    const handleConfirmBooking = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = user?.displayName
        const price = form.get('price')
        const date = form.get('date')
        const email = user?.email
        const message = form.get('message')

        const newBooking = {
            name,
            price,
            date,
            email,
            img: img,
            title: title,
            message,
        }

        axios.post('http://localhost:5000/bookings', newBooking)
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <div>
            <form onSubmit={handleConfirmBooking}>
                <div className="bg-gray-100 lg:w-2/4 mx-auto p-5 my-5 rounded">

                    <h2 className="text-xl font-bold text-[#FF3811] text-center mb-5">Checkout</h2>

                    <div className="flex flex-col md:flex-row gap-5 justify-between ">
                        <input name="name" type="text" placeholder="Name..." defaultValue={user?.displayName} className="input input-bordered input-error w-full max-w-xs text-xs" />

                        <input name="price" type="text" placeholder="Price..." defaultValue={price} className="input input-bordered input-error w-full max-w-xs text-xs" />
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row gap-5 justify-between mt-5">
                            <input name="date" type="date" placeholder="Date..." className="input input-bordered input-error w-full max-w-xs text-xs" />

                            <input name="email" type="text" placeholder="Email..." defaultValue={user?.email} className="input input-bordered input-error w-full max-w-xs text-xs" />
                        </div>
                        <div>
                            <textarea className="h-[100px] mt-5 w-full textarea textarea-warning text-xs" name="message" id="" cols="30" rows="10" placeholder="Your message..."></textarea>
                        </div>
                    </div>
                    <button className="bg-[#FF3811] text-white font-semibold px-3 py-2 rounded w-full mt-4">Checkout</button>

                </div>
            </form>
        </div>
    );
};

export default Checkout;