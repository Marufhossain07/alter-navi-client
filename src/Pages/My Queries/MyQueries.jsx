import Lottie from 'react-lottie';
import animationData from '../../lotties/Animation - 1715361322546.json';
import empty from '../../lotties/empty box.json';
import { Link } from 'react-router-dom';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import MyQuery from './MyQuery';
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useEffect } from 'react';
import useAxiosCommon from '../../hooks/useAxiosCommon';
const MyQueries = () => {
    const axiosCommon = useAxiosCommon();
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const [queries, setQueries] = useState([])
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const options = {
        loop: true,
        autoplay: true,
        animationData: empty,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(()=>{
        data()
    },[user])

    const data = async ()=>{
        await axiosSecure(`/my-queries/${user?.email}`)
        .then(res=>{
            setQueries(res.data)
        })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosCommon.delete(`/my-queries/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingData = queries.filter(data => data._id !== id)
                        setQueries(remainingData)
                    })
            }
            console.log(id)
        });
    }

    return (
        <div className='max-w-[1140px] mx-auto'>
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
                            <FaRegQuestionCircle className='text-3xl mb-5' />
                            <h2 className="text-3xl font-semibold leading-none">Ask Us Anything!</h2>
                            <p className="mt-4 mb-8 ">Embark on a journey of discovery with our Question Nexus! Seamlessly connect with answers to your queries and unearth insights that fuel your quest for knowledge.</p>
                            <Link to="/add-queries"><button className="self-start primary-bg px-10 py-3 text-lg font-medium rounded-md dark:bg-violet-600 dark:text-gray-50">Add Query</button></Link>
                        </div>
                    </div>
                </section>
                <div className='text-center space-y-5'>
                    <h3 className='font-sedan font-semibold text-4xl  mt-10'>My Queries</h3>
                    <p className='font-inter font-medium'>Manage your inquiries effortlessly with our &apos;My Queries&apos; section,keeping track of all <br /> your questions and requests in one convenient place.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 pt-10 gap-5'>
                    {
                        queries?.length > 0 ? queries.map(query => <MyQuery key={query._id} query={query} handleDelete={handleDelete}></MyQuery>) : <>
                            <div className="hero col-span-3">
                                <div className="hero-content flex-col lg:flex-row">
                                    <Lottie
                                        options={options}
                                        height={400}
                                        width={400}
                                    />
                                    <div>
                                        <h1 className="text-3xl font-inter font-bold"><span className='text-red-600 text-4xl'>Oops!</span> No Queries Found</h1>
                                        <p className="py-6">Click Here to Add some queries</p>
                                        <Link to='/add-queries'><button className="btn  primary-bg text-white">Let&apos;s Add</button></Link>
                                    </div>
                                </div>
                            </div></>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyQueries;