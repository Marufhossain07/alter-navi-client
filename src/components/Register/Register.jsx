import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser,
        googleSignIn,
        logOut } = useContext(AuthContext)
        const navigate = useNavigate()
        const axiosCommon = useAxiosCommon();
    const signUpWithGoogle = () => {
        googleSignIn()
            .then(async result => {
                toast('Successfully Sign Up')
                const {data} = await axiosCommon.post('/jwt', {email: result?.user?.email})
                    navigate('/')


            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (password.length < 6) {
            return toast.error("Password should be at least 6 characters or longer", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error("Your password should have at least one uppercase characters", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error("Your password should have at least one lowercase characters", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }


        createUser(email, password)

            .then(async(result) => {
                console.log(result.user)
                toast('You Are Successfully Sign Up', {
                    position: "top-center",
                    autoClose: 2500,
                }
                );
                

                updateProfile(result?.user, {
                    displayName: name,
                    photoURL: photo
                })
                
                logOut()
                setTimeout(() => {
                    navigate('/login')
                }, 2000)


            })
            .catch((error) => {
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
        <div className="bg1">
            <div className="mt-10 p-5">
                <div className=" text-white max-w-md mx-auto p-8 space-y-3 rounded-xl bg-[#2b2d42] opacity-95">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <form onSubmit={handleSignUp} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label className="block font-bold text-lg text-white">Name</label>
                            <input type="text" required name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1  text-sm">
                            <label className="block  font-bold text-lg dark:text-white">Email</label>
                            <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block font-bold text-lg dark:text-white">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer right-3 top-3">{
                                    showPassword ? <AiOutlineEyeInvisible className="text-2xl text-black" /> : <AiOutlineEye className="text-black text-2xl" />
                                }</span>
                            </div>
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block font-bold text-lg dark:text-white">Photo URL</label>
                            <input type="text" required name="photo" id="photo" placeholder="Your Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                        </div>
                        <button className='btn w-full font-bold font-inter py-2 px-8 text-[#2b2d42] bg-white border-none '>Register</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 font-bold text-lg dark:text-white">Register with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={() => signUpWithGoogle()} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className=" text-center sm:px-6 dark:text-white">Already have an account?
                        <Link to="/login"><a rel="noopener noreferrer" href="" className="underline text-white"> Login</a></Link>
                    </p>
                </div>
            </div>
            <ToastContainer
                position="top-right"
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

export default Register;