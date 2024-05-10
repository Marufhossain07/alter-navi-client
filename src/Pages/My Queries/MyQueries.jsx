import Lottie from 'react-lottie';
import animationData from '../../lotties/Animation - 1715361322546.json';
import { Link } from 'react-router-dom';
import { FaRegQuestionCircle } from 'react-icons/fa';
const MyQueries = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <div>
                <section className="dark:bg-gray-100 bg-[#003049] dark:text-gray-800">
                    <div className="max-w-[1140px]  flex flex-col  mx-auto lg:flex-row">
                        <div className="w-full lg:w-1/3">
                            <Lottie
                                options={defaultOptions}
                                height={300}
                                width={300}
                            />
                        </div>
                        <div className="flex flex-col text-white w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        <FaRegQuestionCircle  className='text-3xl mb-5'/>
                            <h2 className="text-3xl font-semibold leading-none">Ask Us Anything!</h2>
                            <p className="mt-4 mb-8 ">Embark on a journey of discovery with our Question Nexus! Seamlessly connect with answers to your queries and unearth insights that fuel your quest for knowledge.</p>
                            <Link to="/add-queries"><button className="self-start primary-bg px-10 py-3 text-lg font-medium rounded-md dark:bg-violet-600 dark:text-gray-50">Add Query</button></Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MyQueries;