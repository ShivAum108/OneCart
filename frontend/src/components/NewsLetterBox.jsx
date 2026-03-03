
function NewsLetterBox() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="w-full h-[40vh] bg-linear-to-l from-[#141414] to-[#0c2025] flex flex-col justify-start items-center gap-2.5">
            <p className="text-[20px] md:text-[30px] text-[#a5faf7] font-semibold px-5">Subscribe Now and Get 20% Off</p>
            <p className="text-[14px] md:text-[18px] text-center text-blue-100 font-semibold px-5">Subscribe Now And Enjoy Exclusive Savings, Special Deals, And Early Access To New Collections</p>
            <form className="w-full h-[30%] md:h-[50%] flex justify-center items-center gap-5 mt-5 px-5" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Your Email" required className="bg-slate-300 w-150 h-11 px-5 rounded-lg shadow-sm shadow-black placeholder:text-black outline-none" />
                <button type="submit" className="border border-[#80808049] text-[15px] md:text-[16px] px-2.5 md:px-7.5 py-3 md:py-2.5 hover:bg-slate-500 bg-[#2e3030c9] cursor-pointer text-white rounded-lg shadow-sm shadow-black">Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetterBox