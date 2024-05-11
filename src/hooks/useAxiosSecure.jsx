import axios from 'axios'
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth();
    axiosSecure.interceptors.response.use(res =>{
        return res
    },
    async error=>{
        if(error.response.status === 403 || error.response.status === 401){
           await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    }
)

    



    return axiosSecure
};

export default useAxiosSecure;