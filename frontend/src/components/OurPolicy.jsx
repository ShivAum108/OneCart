import Title from "./Title"
import { RiExchangeFundsLine } from "react-icons/ri";

function OurPolicy() {
    return (
        <div className="w-screen h-screen md:h-[70vh] flex flex-col justify-start items-center bg-linear-to-l from-[#141414] to-[#0c2025] gap-12.5">
            <div className="w-full text-center mt-17.5">
                <Title text1={"Our"} text2={"Policy"} />
                <p className="w-full m-auto text-[13px] md:text-[20px] px-2.5 text-blue-100">Customer-Friendly Policies - Committed to Your Satisfaction and Safety</p>
            </div>
            <div className="w-full flex justify-center items-center flex-wrap gap-20 lg:gap-12.5">
                <div className="w-100 max-w-[90%] flex flex-col justify-center items-center gap-2.5">
                    <RiExchangeFundsLine className="w-7.5 md:w-15 h-7.5 md:h-15 text-[#90b9ff]" />
                    <p className="text-[19px] md:text-[25px] text-[#a5e8f7] font-semibold">Easy Exchange Policy</p>
                    <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">Exchange made easy - Quick, Simple, and Customer-Friendly Porcess</p>
                </div>
            </div>
        </div>
    )
}

export default OurPolicy