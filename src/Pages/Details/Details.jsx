
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Recommendatio from "./Recommendatio";


const Details = () => {
    const { user } = useAuth();
    const [recommendations, setRecommendations] = useState([])
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    const query = useLoaderData();
    const { _id, product, photo, brand, details, title, name, image, time, recommendationsCount, email } = query;

    useEffect(() => {
        getData()

    }, [user])
    const getData = async () => {
        const { data } = await axiosSecure(`/recommendations/${_id}`)
        setRecommendations(data)
    }

    const handleAddRecommendation = async e => {
        e.preventDefault()
        if (user?.email === email) {
            return toast.error("You can't recommend in your own queries")
        }
        const form = e.target;
        const recTitle = form.recTitle.value;
        const recProduct = form.recProduct.value;
        const recPhoto = form.recPhoto.value;
        const recReason = form.recReason.value;
        const currentTime = new Date(Date.now()).toLocaleString();
        const queryId = _id;
        const recName = user.displayName;
        const recEmail = user.email;
        const newRecommendation = { recTitle, recProduct, recPhoto, recReason, currentTime, title, product, name, email, queryId, recName, recEmail };

        await axiosSecure.post('/recommend', newRecommendation)
            .then(res => {
                toast.success("Recommendation has been added");
                navigate('/my-recommendations')
            })
            .catch(err => {
                toast.warning(err.response)
                form.reset();
            })

    }
    return (
        <div className="max-w-[1140px] mx-auto mt-10">
            <div className="flex md:flex-row lg:flex-row flex-col-reverse justify-between gap-5">
                <div>
                    <h3 className="text-3xl border-b-4 pb-5 border-[#669bbc]  font-sedan font-semibold mb-5">Query Details</h3>
                    <div className=" p-4 shadow-md  dark:bg-gray-50 dark:text-gray-800">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src={photo} alt="" className=" mx-auto  rounded-md h-72 dark:bg-gray-500" />
                                <div className="flex items-center ">
                                    <span >{time}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold dark:text-default-600">{title}</h3>
                                </a>
                                <p className="font-semibold font-inter">Product Name : {product}</p>
                                <p className="font-semibold font-inter">Brand : {brand}</p>

                                <p className="leading-snug font-medium font-inter dark:text-gray-600">Boycotting Reason: {details}</p>
                                <p className="font-inter">Total Recommendations: {recommendationsCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-sedan font-semibold mb-5">Posted By</h3>
                    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md border-t-4 border-[#669bbc]   sm:px-12 dark:bg-gray-50 dark:text-gray-800">

                        <img src={image} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-sedan font-semibold sm:text-2xl">{name}</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-3xl  border-b-4 pb-5 border-[#669bbc] my-5 font-sedan font-semibold">Recommendations: {recommendationsCount}</h3>
                <div className="flex flex-col gap-5">
                    {
                        recommendations.map(recommendation=> <Recommendatio key={recommendation._id} recommendation={recommendation}></Recommendatio>)
                    }
                </div>
            </div>
            <div className="mb-10">
                <h3 className="text-3xl  border-b-4 pb-5 border-[#669bbc] my-5 font-sedan font-semibold">Please write a Recommendations here</h3>
                <div>
                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">New Recommendation</h2>

                        <form onSubmit={handleAddRecommendation}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Recommendation Title</label>
                                    <input name="recTitle" id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Recommended product Name</label>
                                    <input name="recProduct" id="emailAddress" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Recommended Product Image</label>
                                    <input name="recPhoto" id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Recommendation Reason</label>
                                    <textarea name="recReason" className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                                </div>
                            </div>

                            <div className="flex justify-end mt-6">
                                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform primary-bg rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Details;