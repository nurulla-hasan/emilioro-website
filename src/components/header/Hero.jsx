import Image from "next/image";
import wave1 from "../../../public/wave (1).png";
import wave2 from "../../../public/wave (2).png";
import wave3 from "../../../public/wave (3).png";
import heroImage from "../../../public/heroImage.png";

const Hero = () => {
  return (
    <section className="bg-[#1C4587] lg:h-[662px] lg:flex text-white items-center justify-between text-center px-56">

      <div className="text-start flex-1/2 mt-[-100px] z-10">
        <h1 className="text-[50px] w-[600px] font-bold">
          Bankybondy We are chatting
        </h1>
        <p className="text-lg text-[#E3E3E3] mt-6 font-[300]">Real conversations between people</p>

        {/* Signup Button */}
        <button className="mt-16 px-16 py-3 border border-white rounded-md text-white hover:bg-white bg-gradient-to-b from-[#1C4587] to-[#3279EA] transition text-[14px] font-semibold">
          Sign Up for free
        </button>

      </div>


      {/* Image */}
      <div className="mt-10 relative lg:flex-1/2 z-10">
        <div className="flex justify-center items-center w-72 h-72 lg:w-[420px] lg:h-[420px] rounded-full lg:absolute left-0 top-[-170px]">
        <Image
            src={heroImage.src}
            alt="Hero Image"
            className="rounded-full object-cover"
            width={420}
            height={420}
          />
        </div>
      </div>


      {/* wave image */}
      <div className="absolute bottom-20 left-0 w-full h-32 ">
        <Image
          src={wave3.src}
          alt="Wave 1"
          className=""
          layout="fill"
        />
        <Image
          src={wave1.src}
          alt="Wave 2"
          className=""
          layout="fill"
        />
        <Image
          src={wave2.src}
          alt="Wave 3"
          className=""
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Hero;
