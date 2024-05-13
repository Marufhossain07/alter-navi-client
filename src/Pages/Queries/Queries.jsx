import { useEffect, useState } from "react";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Query from "./Query";

const Queries = () => {
    const [queries, setQueries] = useState([])
    const axiosCommon = useAxiosCommon()
    useEffect(() => {
        axiosCommon('/queries')
            .then(res => {
                setQueries(res.data)
            })
    }, [])
    return (
        <div className="max-w-[1140px] mx-auto">
            <h3 className="text-3xl text-center  border-b-4 pb-5 border-[#669bbc] my-5 font-sedan font-semibold">Queries</h3>

            <div className=" text-center">
                <h3 className="font-inter font-semibold mb-5">Search By Product</h3>
                <label className="input w-1/3 mx-auto border border-[#669bbc] flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-7 gap-5">
                {
                    queries.map(query => <Query key={query._id} query={query}></Query>)
                }
            </div>
        </div>
    );
};

export default Queries;