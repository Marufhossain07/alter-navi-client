import { useLoaderData, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Update = () => {
    const navigate = useNavigate();
    const query = useLoaderData();
    console.log(query);

    const axiosSecure = useAxiosSecure()

    const handleUpdate = e =>{

        e.preventDefault();
        const form = e.target;
        const product = form.product.value
        const brand = form.brand.value
        const title = form.title.value
        const details = form.details.value
        const photo = form.photo.value;
        const currentTimeAndDate = Date.now();
        const newDate = new Date(currentTimeAndDate)
        const time = newDate.toLocaleString();
        
        const updatedQuery = {product, photo, brand,details,title, time};
        axiosSecure.put(`/queries/${query._id}`, updatedQuery)
            .then(res=>{
                console.log(res.data);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Query has been updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/my-queries')
            })
            .catch(error=>{
                console.log(error)
            })

    }
    return (
        <div className="bg-[#003049] ">
            <section className="p-6 text-gray-50">
                <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className=" p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <h2 className="text-4xl text-center font-sedan font-semibold pb-5">Update Your Query</h2>


                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Product Name</label>
                                <input defaultValue={query?.product} name="product" type="text" placeholder="Product Name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Product Brand</label>
                                <input defaultValue={query?.brand} name="brand" type="text" placeholder="Product Brand" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-sm">Product Image</label>
                                <input defaultValue={query?.photo} name="photo" type="text" placeholder="Enter Product Image URL" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Query Title</label>
                                <input defaultValue={query?.title} name="title" type="text" placeholder="Query Title" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full flex flex-col  gap-1 sm:col-span-3">
                                <label htmlFor="email" className="text-sm "> Boycotting Reason Details</label>
                                <textarea defaultValue={query?.details} name='details' placeholder="Product Brand" className="textarea text-red text-black textarea-bordered textarea-xs w-full " ></textarea>
                            </div>

                            <div className="col-span-full">
                                <input className="btn text-white w-full p-3 text-center bg-[#2b2d42]" type="submit" value="Update Query" />
                            </div>
                        </div>

                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default Update;