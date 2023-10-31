import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import frameImg from '../../assets/icons/Frame.png'


const Service = ({ service }) => {

    const { _id, img, price, title } = service

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-md p-2">
                <figure><img className='w-full h-[200px]' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='text-xl font-bold'> {title} </h2>

                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-[#FF3811] font-bold'>Price: ${price} </p>

                        <Link to={`/details/${_id}`}>
                            <div className='flex items-center gap-2'>
                                <h2 className='text-[#FF3811] font-semibold'>Details</h2>
                                <img src={frameImg} alt="" />
                            </div>
                        </Link>
                    </div>

                    <Link to={`/checkout/${_id}`}>
                        <button className="bg-[#FF3811] text-white font-semibold px-3 py-2 rounded w-full"> Checkout </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;