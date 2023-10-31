import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()

    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">

            <div className="flex flex-col justify-center items-center my-10">
                <h3 className="text-3xl font-bold text-[#08094C]">Go Back To Home</h3>

                <div className="text-2xl font-bold text-[#08094C] mt-2">
                    {
                        error.statusText || error.message
                    }
                </div>

                <div className="text-2xl font-bold ">
                    {
                        error.status === 404 &&
                        <div> <img className="h-[300px] md:h-[400px] w-full rounded-md " src="https://i.ibb.co/TcRXvhJ/Error404.jpg" alt="" /></div>
                    }
                </div>

                <button onClick={handleGoHome} className='bg-[#1B2E35] px-3 py-2 text-white font-semibold rounded-md mt-3'>Go Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;