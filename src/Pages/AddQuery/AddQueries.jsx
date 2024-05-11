
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useNavigate } from "react-router-dom";


const AddQueries = () => {
    const navigate = useNavigate()
    const {user} = useAuth()
    const axiosCommon = useAxiosCommon()

    const handleAddItems = e =>{
        e.preventDefault();
        const form = e.target;
        const product = form.product.value
        const brand = form.brand.value
        const title = form.title.value
        const details = form.details.value
        const photo = form.photo.value;
        const email = user.email;
        const name = user.displayName;
        const image = user.photoURL;
        const recommendationsCount = 0;
        const currentTimeAndDate = Date.now();
        const newDate = new Date(currentTimeAndDate)
        const time = newDate.toLocaleString();
        
        const newQuery = {product, photo, brand,details,title,email, name, image, recommendationsCount, time};
         axiosCommon.post('/add-query', newQuery)
            .then(res=>{
                console.log(res.data);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Query has been added",
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
                <form onSubmit={handleAddItems} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className=" p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <h2 className="text-4xl text-center font-sedan font-semibold pb-5">Add Queries</h2>


                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Product Name</label>
                                <input name="product" type="text" placeholder="Product Name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Product Brand</label>
                                <input name="brand" type="text" placeholder="Product Brand" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-sm">Product Image</label>
                                <input name="photo" type="text" placeholder="Enter Product Image URL" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Query Title</label>
                                <input name="title" type="text" placeholder="Query Title" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full flex flex-col  gap-1 sm:col-span-3">
                                <label htmlFor="email" className="text-sm "> Boycotting Reason Details</label>
                                <textarea name='details' placeholder="Product Brand" className="textarea text-red text-black textarea-bordered textarea-xs w-full " ></textarea>
                            </div>
                            
                            <div className="col-span-full">
                                <input className="btn text-white w-full p-3 text-center bg-[#2b2d42]" type="submit" value="Add Item" />
                            </div>
                        </div>

                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default AddQueries;