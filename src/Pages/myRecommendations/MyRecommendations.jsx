import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2'
import useAxiosCommon from "../../hooks/useAxiosCommon";
const MyRecommendations = () => {
    const axiosCommon = useAxiosCommon();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const [recommendations, setRecommendations] = useState([]);
    useEffect(() => {
        getData()

    }, [user])
    const getData = async () => {
        const { data } = await axiosSecure(`/my-recommendations/${user?.email}`)
        setRecommendations(data)
    }

    const handleDelete = (id,_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {

            if (result.isConfirmed) {
               axiosCommon.delete(`/my-recommendations/${id}`)
               .then(res=>{
                if(res?.data?.deletedCount> 0){
                    
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
                const remainingData = recommendations.filter(data=> data._id !== _id)
                setRecommendations(remainingData)
               })
            }
          });
    }
    return (
        <div className="max-w-[1140px] mx-auto">
                 <h3 className="text-3xl  border-b-4 pb-5 border-[#669bbc] my-5 font-sedan font-semibold">Your Recommendations</h3>
            <div className="overflow-x-auto my-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Product/Title</th>
                            <th>Product</th>
                            <th>Boycotted Product</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recommendations.map(data =>
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
                                    <th>
                                    <button onClick={()=> handleDelete(data?.queryId , data?._id)} className="btn primary-bg  text-white"><MdDeleteForever className="text-2xl " /> Delete</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;