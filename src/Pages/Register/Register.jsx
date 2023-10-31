import { Link, useNavigate } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProvider";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const termsAccepted = form.get('terms')
        console.log(name, photo, email, password, termsAccepted);

        if (password.length < 6) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Password must be 6 characters long.",
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '100px',
                color: 'white',
                timer: 2000
            })
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Password must have a Capital letter.",
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '100px',
                color: 'white',
                timer: 2000
            })
            return;
        }

        else if (!/[@#$%^&+=!]/.test(password)) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Password must have a special character. [hints: @#$%^&+=!]',
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '50px',
                color: 'white',
                timer: 2000
            })
            return;
        }

        else if (!termsAccepted) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Please accept our terms and conditions before register.',
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '50px',
                color: 'white',
                timer: 2000
            })
            return;
        }

        // Call createUser and pass email and password
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "User has been registered successfully.",
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log("Profile updated.");
                        navigate('/login')
                    })
                    .catch(error => {
                        console.log("Error:", error.message);
                        swal(error.message)
                    })
                e.target.reset()
            })
            .catch(error => {
                console.log("Error:", error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Your email / password is invalid.",
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
        e.target.reset()

    }

    return (
        <div>
            <div className="hero min-h-screen my-5 lg:mt-5">
                <div className="hero-content flex-col md:flex-row lg:flex-row gap-10 lg:gap-20">
                    <div className="text-center lg:text-left lg:w-[50%]">
                        <img className='w-[200px] md:w-[350px]' src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0  max-w-sm  border border-gray-500 lg:w-[50%]">
                        <form onSubmit={handleRegister}>
                            <h2 className='text-2xl font-semibold text-center mt-5'>Sign Up</h2>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name</span>
                                    </label>
                                    <input
                                        name='name'
                                        type="text"
                                        placeholder="Name..." className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Photo url</span>
                                    </label>
                                    <input
                                        name='photo'
                                        type="text"
                                        placeholder="Photo url..." className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input
                                        name='email'
                                        type="email"
                                        placeholder="Email..." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input
                                        name='password'
                                        type="password" placeholder="password" className="input input-bordered" required />
                                </div>

                                <div className='flex gap-2 items-center  font-semibold'>
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        id="" />
                                    <label className='text-xs text-purple-900'>Accept terms and conditions</label>
                                </div>

                                <div className="form-control">
                                    <button className='text-white font-semibold bg-[#f3411d] px-3 py-2 rounded'>Sign Up</button>
                                </div>

                                <div className='text-center mt-2'>
                                    <h2 className='text-sm'>Already have an account? <Link className='text-[#f3411d] font-semibold' to="/login">Login</Link> </h2>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;