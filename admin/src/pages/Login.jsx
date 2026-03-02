import logo from "../assets/logo.png"
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { adminDataContext } from "../context/AdminContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();
  const { getAdmin } = useContext(adminDataContext)

  const adminLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(serverUrl + "/api/auth/adminlogin", {
        email,
        password
      }, { withCredentials: true });
      navigate("/");
      getAdmin();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full h-screen bg-linear-to-l from-[#141414] to-[#0c2025] text-white flex flex-col justify-start items-center">
      <div className="w-full h-20 px-4.75 flex items-center justify-start gap-2.5 cursor-pointer">
        <img src={logo} alt="" className="w-10" />
        <h1 className="text-[22px] font-sans" onClick={() => navigate("/")}>OneCart</h1>
      </div>
      <div className="w-full h-25 flex flex-col justify-center items-center gap-5">
        <span className="text-[25px] font-semibold">Login</span>
        <span>Welcome to OneCart, admin login</span>
      </div>
      <div className="border w-[90%] max-w-150 h-100 bg-[#00000025] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex flex-col justify-center items-center">
        <form className="w-[90%] h-[90%] flex flex-col justify-start items-center gap-5" onSubmit={adminLogin}>
          <div className="w-[90%] h-100 gap-6 flex flex-col justify-center items-center">
            <input type="text" className="w-full h-12.5 border-2 border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="w-full relative">
              <input type={showPassword ? "text" : "password"} className="w-full h-12.5 border-2 border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <span className="absolute top-4 right-5 cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>{showPassword ? <IoEye className="w-5 h-5" /> : <IoMdEyeOff className="w-5 h-5" />}</span>
            </div>

            <button className="w-full mt-5 h-12.5 bg-[#6060f5] text-[17px] font-semibold rounded-lg flex justify-center items-center cursor-pointer hover:bg-[blue] transition duration-300">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login