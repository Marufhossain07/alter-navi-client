import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#fdf0d5]">
            <footer className="px-4 divide-y max-w-[1140px] mx-auto dark:bg-[#edf2f4] dark:text-[#2b2d42]">
                <div className="container flex flex-col justify-around  py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div>
                    <a className="btn btn-ghost text-4xl font-sedan lg:pl-0 text-[#003049]">Alter<span className="text-[#669bbc]">Navi</span></a>

                    </div>
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2  w-1/2 ">
                        <div className="space-y-3">
                            <div className="uppercase font-bold font-inter dark:text-gray-900">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <a rel="noopener noreferrer" href="https://www.facebook.com/jinvau" title="Facebook" className="flex items-center p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/md-maruf-hossain07/" title="Linkedin" className="flex items-center p-1">
                                <FaLinkedin className="text-2xl"/>
                                </a>
                            </div>
                        </div>
                        <form>
                            <h6 className="footer-title text-black font-inter opacity-100 font-bold">Newsletter</h6>
                            <fieldset className="form-control w-80">
                                <label className="label">
                                    <span className="label-text font-inter">Enter your email address</span>
                                </label>
                                <div className="join">
                                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                    <button className="btn font-inter border-none bg-[#669bbc] text-white join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className="py-6 text-sm text-center dark:text-gray-600">©2025 AlterNavi. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;