import logo from "../assets/logo.png"
import { IoSearch } from "react-icons/io5";
import { RiSearchFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsFillCollectionFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom"
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { shopDataContext } from "../context/ShopContext";

function Nav() {
    const { showSearch, setShowSearch, search, setSearch } = useContext(shopDataContext);
    const [showProfile, setShowProfile] = useState(false);
    const { userData } = useContext(userDataContext);;
    const { serverUrl } = useContext(authDataContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true });
            navigate("/login");
            location.reload()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="w-full h-17.5 bg-[#ecfafaec] px-2 lg:px-7.5 fixed top-0 z-10 shadow-md shadow-black flex justify-between items-center">
            <div className="w-[20%] flex justify-start items-center gap-2.5">
                <img src={logo} alt="" className="w-7.5" />
                <h1 className="text-[25px] text-black">OneCart</h1>
            </div>
            <div className="w-[50%] hidden md:flex justify-center">
                <ul className="text-white flex justify-center items-center gap-4.75">
                    <li className="text-[15px] bg-[#000000c9] hover:bg-slate-500 cursor-pointer py-2.5 px-5 rounded-2xl" onClick={() => navigate("/")}>HOME</li>
                    <li className="text-[15px] bg-[#000000c9] hover:bg-slate-500 cursor-pointer py-2.5 px-5 rounded-2xl" onClick={() => navigate("/collection")}>COLLECTIONS</li>
                    <li className="text-[15px] bg-[#000000c9] hover:bg-slate-500 cursor-pointer py-2.5 px-5 rounded-2xl" onClick={() => navigate("/about")}>ABOUT</li>
                    <li className="text-[15px] bg-[#000000c9] hover:bg-slate-500 cursor-pointer py-2.5 px-5 rounded-2xl" onClick={() => navigate("/contact")}>CONTACT</li>
                </ul>
            </div>
            <div className="w-[20%] flex justify-end items-center gap-5">
                {showSearch
                    ?
                    <RiSearchFill className="w-9.5 h-9.5 cursor-pointer text-[#000000]" onClick={() => setShowSearch(false)} />
                    :
                    <IoSearch className="w-9.5 h-9.5 cursor-pointer text-[#000000]" onClick={() => { setShowSearch(true); navigate("/collection") }} />

                }

                {userData
                    ?
                    <div className="w-7.5 h-7.5 bg-[#080808] text-white rounded-full flex justify-center items-center cursor-pointer" onClick={() => setShowProfile(!showProfile)}>{userData?.name.slice(0, 1)}</div>
                    :
                    <FaCircleUser className="w-7.5 h-7.5 cursor-pointer text-[#000000]" onClick={() => setShowProfile(prev => !prev)} />

                }
                <BsCart4 className="w-7.5 h-7.5 cursor-pointer text-[#000000] hidden md:block" />
                <p className="w-[4.5] h-[4.5] bg-black text-white text-[9px] px-1.25 py-0.5 hidden md:flex justify-center items-center absolute top-4 right-5 rounded-full">10</p>
            </div>
            {showSearch &&
                <div className="border w-full h-20 bg-[#d8f6f9dd] absolute top-full left-0 right-0 flex justify-center items-center">
                    <input type="text" className="lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-12.5 placeholder:text-white text-white text-[16px] md:text-[18px]" placeholder="Search here" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            }
            {showProfile &&

                <div className="w-55 h-37.5 absolute top-18 right-5 border border-[#000000d7] rounded-[10px] bg-[#aaa9a9] z-10">
                    <ul className="w-full h-full text-white text-[17px] py-2 flex flex-col justify-around items-center">
                        {userData ?
                            <li className="w-full px-3.75 py-2.5 cursor-pointer hover:bg-[#2f2f2f]" onClick={() => { handleLogout(); setShowProfile(false) }}>Logout</li>
                            :
                            <li className="w-full px-3.75 py-2.5 cursor-pointer hover:bg-[#2f2f2f]">Login</li>
                        }
                        <li className="w-full px-3.75 py-2.5 cursor-pointer hover:bg-[#2f2f2f]">Orders</li>
                        <li className="w-full px-3.75 py-2.5 cursor-pointer hover:bg-[#2f2f2f]" onClick={() => { navigate("/about"); setShowProfile(false) }}>About</li>
                    </ul>
                </div>
            }

            <div className="w-full h-22.5 px-5 fixed bottom-0 left-0 bg-[#191818] text-[12px] flex justify-between items-center md:hidden">
                <button className="text-white flex flex-col justify-center items-center gap-0.5 cursor-pointer" onClick={() => navigate("/")}><AiFillHome className="w-6.25 h-6.25" /> Home</button>
                <button className="text-white flex flex-col justify-center items-center gap-0.5 cursor-pointer" onClick={() => navigate("/collection")}><BsFillCollectionFill className="w-6.25 h-6.25" /> Collection</button>
                <button className="text-white flex flex-col justify-center items-center gap-0.5 cursor-pointer" onClick={() => navigate("/contact")}><IoMdContact className="w-6.25 h-6.25" /> Contact</button>
                <button className="text-white flex flex-col justify-center items-center gap-0.5 cursor-pointer"><BsCart4 className="w-6.25 h-6.25" /> Cart</button>
                <p className="border border-white absolute top-4 right-3 w-4.5 h-4.5 bg-white px-1.25 py-0.5 text-[9px] rounded-full font-semibold flex justify-center items-center">10</p>
            </div>

        </div>
    )
}

export default Nav