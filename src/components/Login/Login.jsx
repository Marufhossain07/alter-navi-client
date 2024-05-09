import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {signIn,googleSignIn,githubSignIn} = useContext(AuthContext)
    const location = useLocation();

    const navigate = useNavigate();

    const handleLogin = e =>{

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
        .then(result => {
            toast('Successfully Sign Up')
            setTimeout(()=>{
                navigate(location?.state ? location.state : '/')
            }, 2000)
           
        })
        .catch((error)=>{
            const errorMessage = error.message.slice(10)
            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }

    return (
        <div className="mt-10 p-5 bg1">
            <div className="w-full max-w-md mx-auto text-white p-8 space-y-3 rounded-xl bg-[#2b2d42] opacity-95">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block font-bold text-lg text-white ">Email</label>
                        <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black  focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block font-bold text-lg text-white">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer right-3 top-3">{
                                showPassword ? <AiOutlineEyeInvisible className="text-2xl text-black" /> : <AiOutlineEye className="text-2xl text-black" />
                            }</span>
                        </div>
                    </div>
                    <button className='btn w-full font-bold font-inter py-2 px-8 bg-white border-none text-[#2b2d42]'>Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 font-bold text-lg text-white">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={() => googleSignIn()} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                    
                </div>
                <p className=" text-center sm:px-6 text-white">Do not have an account?
                    <Link to="/register"><a rel="noopener noreferrer" href="" className="underline text-white"> Register</a></Link>
                </p>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;