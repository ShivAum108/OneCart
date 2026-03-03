import Title from "../components/Title"
import about from "../assets/about.jpg"


function About() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-linear-to-l from-[#141414] to-[#0c2025] gap-12.5 pt-20">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-[50%] flex justify-center items-center">
          <img src={about} alt="" className="w-[80%] lg:w-[65%] shadow-md shadow-black rounded-sm" />
        </div>
        <div className="w-[80%] lg:w-[50%] flex flex-col justify-center items-start gap-5 mt-5 lg:mt-0">
          <p className="w-full lg:w-[80%] text-white md:text-[16px] text-[13px]">
            OneCart born for smart, seamless shopping-created to deliver quality products, trending styles, and everyday essentials, in one place. With reliable service, fast delivery, and great value, OneCart makes your online shoppong experience simle, satisfying, and stress-free.
          </p>
          <p className="w-full lg:w-[80%] text-white md:text-[16px] text-[13px]">
            Modern shoppers-combining style, convenience, and affordability, whether it's fashion, essentials, or trends, we bring everything you need on one trusted platform with with fast delivery, easy returns, and a customer-first shopping expereience you'll love.
          </p>
          <p className="w-full lg:w-[80%] text-white md:text-[18px] text-[15px] mt-2.5 font-bold">
            OUR MISSION
          </p>
          <p className="w-full lg:w-[80%] text-white md:text-[16px] text-[13px]">
            Our mission is to redefine online shopping by delivering quality, affordability, and convenience. OneCart connects customers with trusted products and brands, offering a seamless, customer-focused experience that saves time, adds value, and fits every lifestyle and need.
          </p>
        </div>
      </div>
      <div className="border border-white w-full flex flex-col justify-center items-center gap-2.5">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="border border-white w-[80%] flex flex-col lg:flex-row justify-center items-center py-10">
          <div className="lg:w-[33%] w-[90%] h-62.5 border border-gray-100 flex justify-center items-center gap-5 flex-col px-10 py-2.5 text-white backdrop:blur-0.5 bg-[#ffffff0b]">
            <b className=""></b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About