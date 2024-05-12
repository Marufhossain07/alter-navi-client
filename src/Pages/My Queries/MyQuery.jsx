import { FcViewDetails } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";


const MyQuery = ({ query }) => {
    const { _id,product, photo, brand, details, title, name, image, time } = query;

    return (
        <div className="w-full overflow-hidden border bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover object-center w-full p-5 h-56" src={photo} alt="avatar" />

            <div className="flex items-center px-6 py-3 primary-bg">


                <h1 className="mx-3 text-lg font-semibold text-white">{product}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">{time}</p>

                <div className="flex  flex-col justify-end gap-5">
        <Link className="text-right" to={`/queries/${_id}`}><button className="btn primary-bg  text-white"><FcViewDetails className="text-2xl " /> Details</button></Link>
        <Link className="text-right" to={`/queries/${_id}`}><button className="btn primary-bg  text-white"><GrUpdate className="text-xl " /> Update</button></Link>
        <Link className="text-right" to={`/queries/${_id}`}><button className="btn primary-bg  text-white"><MdDeleteForever className="text-2xl " /> Delete</button></Link>

                </div>
            </div>
        </div>
    );
};

export default MyQuery;