import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddQueries = () => {
    const {user} = useContext(AuthContext)
    const handleAddItems = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const item = form.item.value
        const sub = form.sub.value;
        console.log(sub)
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const email = form.email.value;
        const photo = form.photo.value;

        const newItem = {item,sub,description,price,rating,customization,time,stock,email,name,photo};
        
    }
    return (
        <div>
            <section className="p-6 bg-gray-800 text-gray-50">
                <form onSubmit={handleAddItems} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className=" p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <h2 className="text-4xl text-center font-pop font-semibold pb-5">Add Craft Item</h2>


                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Item Name</label>
                                <input name="item" type="text" placeholder="Item Name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full flex flex-col sm:col-span-3">
                                <label className="text-sm">Sub-Category Name</label>
                                <select name="sub" className="select h-full text-black select-info border-[#2b2d42]">
                    <option disabled selected>Select Sub-Category</option>
                    <option>CardMaking</option>
                    <option>Scrapbooking</option>
                    <option>Paper Quilling & Origami</option>
                    <option>Glass Painting</option>
                    <option>Glass Dying & Staining</option>
                    <option>Lampworking</option>
                </select>
                            </div>
                            <div className="col-span-full flex flex-col text-black gap-1 sm:col-span-3">
                                <label htmlFor="email" className="text-sm text-black">Short Description</label>
                                <textarea name='description' placeholder="Write here" className="textarea text-red textarea-bordered textarea-xs w-full " ></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Price</label>
                                <input name="price" type="text" placeholder="Price" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Rating</label>
                                <input name="rating" type="text" placeholder="Rating" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Customization</label>
                                <input name="customization" type="text" placeholder="Customization" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Processing Time</label>
                                <input name="time" type="text" placeholder="Processing Time" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Stock Status</label>
                                <input name="stock" type="text" placeholder="Stock Status" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Email</label>
                                <input name="email" type="text" defaultValue={user?.email}  className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900  border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Name</label>
                                <input name="name" type="text" defaultValue={user?.displayName}  className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="city" className="text-sm">Photo</label>
                                <input name="photo" type="text" placeholder="Enter photo URL" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
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