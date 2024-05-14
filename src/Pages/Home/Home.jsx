import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Query from "./Query";
import Newsletter from "./Newsletter";
import Faq from "./Faq";

const Home = () => {
    const [queries, setQueries] = useState([])
    const axiosCommon = useAxiosCommon()
    useEffect(()=>{
        axiosCommon('/queries')
        .then(res =>{
            setQueries(res.data)
        })
    },[])
    return (
        <div className="max-w-[1140px] mx-auto">
            <Banner></Banner>
            <div className="text-center space-y-5 mt-10">
                <h3 className="text-4xl font-sedan font-semibold">Recent Queries</h3>
                <p>Stay updated with the latest questions. Explore a dynamic feed of <br /> recent queries from users worldwide.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-7 gap-5">
                    {
                        queries.slice(0,6).map(query=> <Query key={query._id} query={query}></Query>)
                    }
                </div>
                <div>
                    <Newsletter></Newsletter>
                </div>
                <div>
                    <Faq></Faq>
                </div>
            </div>
        </div>
    );
};

export default Home;