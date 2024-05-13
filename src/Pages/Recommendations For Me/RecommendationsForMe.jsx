import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import empty from '../../lotties/empty box.json';
import Lottie from "react-lottie";
const RecommendationsForMe = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const [recData, setRecData] = useState([]);
    console.log(recData);
    useEffect(() => {
        getData()

    }, [user])

    const getData = async () => {
        const { data } = await axiosSecure(`/recommendations-for-me/${user?.email}`)
        setRecData(data)
    }
    const options = {
        loop: true,
        autoplay: true,
        animationData: empty,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="max-w-[1140px] mx-auto">
            <h3 className="text-3xl my-5 border-b-4 pb-5 border-[#669bbc]  font-sedan font-semibold mb-5">All The Recommendations of your queries</h3>
            <div className="overflow-x-auto my-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Product/Title</th>
                            <th>Product</th>
                            <th>Boycotted Product</th>
                            <th>Recommender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recData.map(data =>
                                <tr key={data._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={data?.recPhoto} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{data?.recTitle}</div>
                                                <div className="text-sm opacity-50">{data?.currentTime}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {data?.recProduct}
                                    </td>
                                    <td>{data?.product}</td>
                                    <th> {data?.recName}
                                    </th>
                                </tr>
                            )
                        }
                        {
                            recData?.length === 0 && <div className="hero col-span-3">
                                <div className="hero-content flex-col lg:flex-row">
                                    <Lottie
                                        options={options}
                                        height={400}
                                        width={400}
                                    />
                                    <div>
                                        <h1 className="text-3xl font-inter font-bold"> You didn&apos;t get any recommendations yet</h1>
                                    </div>
                                </div>
                            </div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecommendationsForMe;