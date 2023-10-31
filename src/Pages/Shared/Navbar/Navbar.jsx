import { NavLink } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged Out successful',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
    }

    const navLinks = <>
        <NavLink to="/" className="text-base font-semibold mr-3">Home</NavLink>

        <NavLink to="/" className="text-base font-semibold mr-3">About</NavLink>

        <NavLink to="/" className="text-base font-semibold mr-3">Services</NavLink>

        <NavLink to="/addServices" className="text-base font-semibold mr-3">Add Services</NavLink>

        {
            user ?
                <>
                    <NavLink to="/bookings" className="text-base font-semibold mr-3">My Bookings</NavLink>
                    <button className="text-base font-semibold mr-3" onClick={handleLogout}>Log Out</button>
                </>
                : <NavLink to="/login" className="text-base font-semibold mr-3">Login</NavLink>
        }
    </>

    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <img className='w-20 hidden md:block' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline text-[#FF3811]">Appointment</a>
            </div>
        </nav>
    );
};

export default Navbar;