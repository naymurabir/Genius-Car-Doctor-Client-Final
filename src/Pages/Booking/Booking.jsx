import PropTypes from 'prop-types';
import { AiOutlineDelete } from 'react-icons/ai';

const Booking = ({ booking, handleDeleteBooking, handleUpdateBooking }) => {
    const { _id, img, date, email, title, price, status } = booking

    return (
        <>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDeleteBooking(_id)}> <AiOutlineDelete className='text-red-500 text-2xl'></AiOutlineDelete> </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span>${price}</span>
                </td>
                <td>{date}</td>
                <th>
                    {
                        status === 'confirm' ?
                            <button onClick={() => handleUpdateBooking(_id)} className="text-green-400 btn btn-outline btn-xs px-3 py-1 rounded">Approved</button>
                            :
                            <button onClick={() => handleUpdateBooking(_id)} className="text-white bg-[#f3411d] px-3 py-1 rounded">Pending</button>
                    }
                </th>
            </tr>
        </ >
    );
};

Booking.propTypes = {
    booking: PropTypes.object.isRequired,
    handleDeleteBooking: PropTypes.func.isRequired,
    handleUpdateBooking: PropTypes.func.isRequired
}

export default Booking;