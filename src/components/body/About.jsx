
import aboutImage from '../../../public/aboutImage.png'
import aboutImage2 from '../../../public/about.png'

const About = () => {
    return (
        <section className="w-4/5 mx-auto my-12 md:py-24 px-12 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Left side - Image */}
                <div className="w-full md:w-1/2 flex items-center justify-start relative">
                    <img
                        src={aboutImage.src}
                        alt="People having a conversation"
                        width={450}
                        height={450}
                    />
                    <img
                        className='absolute top-[68] left-[45]'
                        src={aboutImage2.src}
                        width={280}
                        height={280}
                    />

                </div>

                {/* Right side - Content */}
                <div className="mx-auto w-3/4 px-5">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-[#1e3a8a]">About us</h2>
                        <div className="w-36 h-[2px] bg-[#1e3a8a]"></div>
                    </div>

                    <div className="my-6 text-[#6F6F6F]">
                        <p>
                            Welcome to Bankybondy, where conversations come to life. We are a platform dedicated to preserving the authenticity of human interactions through shared audio recordings. Whether it's a dinner discussion, a tea-time chat, or meaningful exchanges with friends, we believe every conversation has a story to tell.
                            Our mission is simple: to connect, inspire, and learn from the everyday talks that make us who we are. Join our growing community today!
                        </p>
                    </div>

                    <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-6 py-2 rounded-md font-medium">
                        Read more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;