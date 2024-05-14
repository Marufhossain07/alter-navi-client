import Lottie from "react-lottie";

import faq from '../../lotties/faq.json';
const Faq = () => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: faq,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <h3 className="text-4xl text-center font-sedan font-semibold">Recent Queries</h3>
            <div className="hero rounded-lg my-10 bg-base-200">
                

                <div className="hero-content flex-col lg:flex-row">
                    <Lottie
                        options={options}
                        height={400}
                        width={400}
                    />
                    <section className="bg-white rounded-lg dark:bg-gray-900">
                        <div className="container  text-left max-w-4xl px-6 space-y-5 py-10 mx-auto">

                            <div className="collapse collapse-plus border-2 border-[#669bbc] rounded-lg">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    How do i post query ?
                                </div>
                                <div className="collapse-content">
                                    <p>You just have to go to in my query section, then there you will see a add query button on a banner. Just click it and add query.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus border-2 border-[#669bbc] rounded-lg">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    Is this free or Do I have to pay any subscriptions ?
                                </div>
                                <div className="collapse-content">
                                    <p>AlterNavi is completely free. We don&apos;t charge at all.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus border-2 border-[#669bbc] rounded-lg">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    Where can I see when someone gives me Recommendations ?
                                </div>
                                <div className="collapse-content">
                                    <p>You can see it in your query details. Also if you visit Recommendations For Me section, you can see it from there also</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default Faq;