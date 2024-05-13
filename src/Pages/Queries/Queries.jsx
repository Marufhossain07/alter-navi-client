import { useEffect, useState } from "react";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Query from "./Query";
import { FaSearch } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";

const Queries = () => {
    const [queries, setQueries] = useState([]);
    const axiosCommon = useAxiosCommon();
    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');
    const [gridLayout, setGridLayout] = useState('grid-cols-3');
    const [ toggle, setToggle] = useState(true)
    useEffect(() => {
        axiosCommon(`/queries?search=${search}`)
            .then(res => {
                setQueries(res.data)
            })
    }, [search])
    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }

    return (
        <div className="max-w-[1140px] mx-auto">
            <h3 className="text-3xl text-center  border-b-4 pb-5 border-[#669bbc] my-5 font-sedan font-semibold">Queries</h3>

            <div className=" text-center">
                <h3 className="font-inter font-semibold mb-5">Search By Product</h3>
                <form onSubmit={handleSearch}>
                    <label className="input w-1/3 mx-auto border border-[#669bbc] flex items-center gap-2">
                        <input onChange={e=> setSearchText(e.target.value)} name="search" type="text" value={searchText} className="grow" placeholder="Search" />
                        <button><FaSearch className="text-2xl text-[#669bbc]" /></button>
                    </label>
                </form>
                <div className="flex flex-row justify-center gap-5">
                <button onClick={handleReset} className="btn primary-bg mt-5 text-white text-right">Reset</button>
                <button onClick={handleGrid} className="btn primary-bg mt-5 text-white text-right"><LuLayoutGrid />Layout</button>
                </div>
            </div>
            <div className={`grid md:grid-cols-2 lg:${gridLayout} py-7 gap-5`}>
                {
                    queries.map(query => <Query key={query._id} query={query}></Query>)
                }
            </div>
        </div>
    );
};

export default Queries;