import Image from "next/image";
import wave2 from "../../../public/wave (2).png";
import wave3 from "../../../public/wave (3).png";
import heroImage from "../../../public/heroImage.png";

const Hero = () => {
  return (
    <section className="bg-[#1C4587] lg:h-[662px] flex flex-col lg:flex-row text-white items-center justify-between text-center px-6 lg:px-56 relative overflow-hidden">
      {/* Left Content */}
      <div className="text-start flex-1 mt-8 lg:mt-[-100px] z-10">
        <h1 className="text-[32px] lg:text-[50px] lg:w-[600px] font-bold">
          Bankybondy We are chatting
        </h1>
        <p className="text-base lg:text-lg text-[#E3E3E3] mt-4 lg:mt-6 font-[300]">
          Real conversations between people
        </p>

        {/* Signup Button */}
        <button className="mt-8 lg:mt-16 px-8 lg:px-16 py-2 lg:py-3 border border-white rounded-md text-white hover:bg-white bg-gradient-to-b from-[#1C4587] to-[#3279EA] transition text-[14px] font-semibold">
          Sign Up for free
        </button>
      </div>

      {/* Image */}
      <div className="mt-10 relative flex-1 z-10 flex justify-center mb-5 lg:mb-0">
        <div className="flex justify-center items-center w-48 h-48 lg:w-[420px] lg:h-[420px] rounded-full">
          <Image
            src={heroImage.src}
            alt="Hero Image"
            className="rounded-full object-cover"
            width={420}
            height={420}
          />
        </div>
      </div>

      {/* Wave Images */}
      <div className="absolute right-0 bottom-28 left-0">
        <img className="absolute" src={wave3.src} alt="Wave 1"/>
        <img className="" src={wave2.src} alt="Wave 3"/>
      </div>
    </section>
  );
};

export default Hero;
