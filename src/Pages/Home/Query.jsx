import { Link } from "react-router-dom";

const Query = ({ query }) => {
    const { _id,product, photo, brand, details, title, name, image, time } = query;

    return (
        <Link to={`/queries/${_id}`}>
        <div id="card" className="max-w-2xl overflow-hidden p-6 bg-white rounded-lg border border-[#669bbc] shadow-md dark:bg-gray-800">
            <img src={photo} className="h-48 mx-auto rounded-md p-5" alt="" />

            <div className=" text-left flex flex-col justify-between h-80">
                <div>
                    <span className="text-left font-medium text-black  dark:text-blue-400">Product: {product}</span>
                    <p className="text-black font-medium">Brand: {brand}</p>
                    <a className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white " tabIndex="0" role="link">{title}</a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{details}.</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={image} alt="Avatar" />
                            <a className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{name}</a>
                        </div>
                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{time.slice(0,9)}</span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Query;