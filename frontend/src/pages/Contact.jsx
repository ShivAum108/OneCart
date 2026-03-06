import Title from "../components/Title"
import contact from "../assets/contact.jpg"
import NewsLetterBox from "../components/NewsLetterBox"

function Contact() {
  return (
    <div className='w-[99vw] min-h-screen flex flex-col justify-center items-center bg-linear-to-l from-[#141414] to-[#0c2025] gap-12.5 pt-20'>
      <Title text1={"CONTACT"} text2={"US"} />
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-[50%] flex justify-center items-center">
          <img src={contact} alt="" className="w-[80%] lg:w-[70%] shadow-md shadow-black rounded-sm" />
        </div>
        <div className="w-[80%] lg:w-[50%] flex flex-col justify-center items-start gap-5 mt-5 lg:mt-0">
          <p className="lg:w-[80%] w-full text-white font-semibold lg:text-[18px] text-[15px]">
            Our Store
          </p>
          <div className="w-full lg:w-[80%] text-white text-[13px] md:text-[16px]">
            <p>12345 Random Station</p>
            <p>Random City, State, India</p>
          </div>
          <p className="w-full lg:w-[80%] text-white text-[13px] md:text-[16px]">
            <p>tel: +91-9876543210</p>
            <p>Email: admin@onecart.com</p>
          </p>
          <p className="lg:w-[80%] w-full text-white lg:text-[18px] text-[15px] mt-2.5 font-bold">
            Careers at OneCart
          </p>
          <p className="lg:w-[80%] w-full text-white md:text-[16px] text-[13px] mt-2.5">
            Learn more about our teams and job openings
          </p>
          <button className="border border-white text-white px-7.5 py-4 flex justify-center items-center bg-transparent active:bg-slate-600 rounded-md cursor-pointer">Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact