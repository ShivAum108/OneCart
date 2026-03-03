import logo from "../assets/logo.png"

function Footer() {
    return (
        <div className='w-full h-[21vh] md:h-[36vh] mb-19.25 md:mb-0'>
            <div className='w-full h-[15vh] md:h-[30vh] md:mb-0 bg-[#dbfcfcec] flex justify-center items-center px-1.25 md:px-12.5'>
                <div className='w-[35%] md:w-[30%] h-full flex flex-col justify-center gap-1.25'>
                    <div className='mt-2.5 flex justify-start items-start gap-1.25'>
                        <img src={logo} alt="" className="w-7.5 md:w-10 h-7.5 md:h-10" />
                        <p className="text-[19px] md:text-[20px] text-black">OneCart</p>
                    </div>
                    <p className="text-[15px] text-[#1e2223] hidden md:block">One Cart is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and designed to make your life easier every day</p>
                    <p className="text-[15px] text-[#1e2223] flex md:hidden">Fast, Easy, Reliable. OneCart Shopping</p>
                </div>
                <div className="md:w-[25%] w-[30%] h-full flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center gap-1.25 mt-2.5 md:mt-10">
                        <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">COMPANY</p>
                    </div>
                    <ul>
                        <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">Home</li>
                        <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">About us</li>
                        <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">Delivery</li>
                        <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
                <div className="md:w-[25%] w-[40%] h-full flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center gap-1.25 mt-2.5 md:mt-10">
                        <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">GET IN TOUCH</p>
                    </div>
                    <ul>
                        <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">+91-9876543210</li>
                        <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">contact@onecart.com</li>
                        <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">+1-123-456-7890</li>
                        <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">admin@onecart.com</li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-px bg-slate-400"></div>
            <div className="w-full h-[5vh] bg-[#dbfcfcec] flex justify-center items-center">Copyright 2025@onecart.com-All Rights Reserved</div>
        </div>
    )
}

export default Footer