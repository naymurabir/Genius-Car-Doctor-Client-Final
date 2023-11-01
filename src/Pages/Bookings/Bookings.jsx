import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProvider";
import Booking from "../Booking/Booking";
import swal from "sweetalert";

const Bookings = () => {

    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:5000/bookings?email=${user?.email}`, { withCredentials: true })
                .then(res => {
                    setBookings(res.data)
                })
        }
    }, [user?.email])

    const handleDeleteBooking = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                            if (data.deletedCount > 0)
                                swal("The booking has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("Your file is safe!");
                }
            });

    }

    const handleUpdateBooking = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = bookings.filter(booking => booking._id !== id)
                const updatedBooking = bookings.find(booking => booking._id === id)
                updatedBooking.status = 'confirm'
                const newUpdatedBooking = [updatedBooking, ...remaining]
                setBookings(newUpdatedBooking)
            })
    }

    return (
        <div>
            <h2 className="text-xl font-bold text-center text-[#f3411d]
            ">Your Bookings List</h2>
            <hr className="my-2 w-1/2 mx-auto" />
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    <tbody>
                        {
                            bookings.map(booking => <Booking key={booking._id} booking={booking} handleDeleteBooking={handleDeleteBooking} handleUpdateBooking={handleUpdateBooking}></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;