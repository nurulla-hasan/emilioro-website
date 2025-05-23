import aboutImage from '../../../public/aboutImage.png';
import aboutImage2 from '../../../public/about.png';

const About = () => {
    return (
        <section className="w-11/12 md:w-4/5 mx-auto my-12 md:py-24 px-6 md:px-12 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Left side - Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start relative">
                    <img
                        src={aboutImage.src}
                        alt="People having a conversation"
                        className="w-5/6 sm:w-[300px] md:w-[450px]"
                    />
                    <img
                        className="absolute top-10 lg:top-18 left-15 lg:left-16 w-1/2 sm:w-[180px] md:w-[280px]"
                        src={aboutImage2.src}
                        alt="Overlay Image"
                    />
                </div>

                {/* Right side - Content */}
                <div className="w-full md:w-1/2 text-center md:text-left md:px-5">
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a]">About us</h2>
                        <div className="w-24 sm:w-36 h-[2px] bg-[#1e3a8a] mx-auto md:mx-0"></div>
                    </div>

                    <div className="my-6 text-[#6F6F6F] text-sm sm:text-base">
                        <p>
                            Welcome to Bankybondy, where conversations come to life. We are a platform dedicated to preserving the authenticity of human interactions through shared audio recordings. Whether it's a dinner discussion, a tea-time chat, or meaningful exchanges with friends, we believe every conversation has a story to tell.
                        </p>
                        <p className="mt-4">
                            Our mission is simple: to connect, inspire, and learn from the everyday talks that make us who we are. Join our growing community today!
                        </p>
                    </div>

                    <button className="cursor-pointer bg-button text-white px-6 py-2 rounded-md font-medium">
                        Read more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
