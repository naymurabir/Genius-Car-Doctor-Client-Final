import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div>
            <div className="hero my-10">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className='md:w-full lg:w-[60%] relative'>
                        <img className='rounded-md w-[400px] h-[300px] md:h-[350px]' src={person} />
                        <img className='absolute  border-8 border-white md:right-40 lg:right-8 xl:right-36 md:top-52 lg:top-1/2 rounded-md w-[200px] h-[200px] hidden md:block' src={parts} />
                    </div>
                    <div className='md:w-full lg:w-[40%]'>
                        <h3 className='text-lg text-[#FF3811] font-bold'>About us</h3>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold">We are qualified <br /> & of experience <br /> in  this field</h1>
                        <p className="py-3 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                        <p className="py-3 text-sm">The majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                        <button className="bg-[#FF3811] text-white font-semibold px-3 py-2 rounded">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;