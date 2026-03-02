import logo from "../assets/logo.png"
import google from "../assets/google.png"
import { useNavigate } from "react-router-dom"
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState, useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { userDataContext } from "../context/UserContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { serverUrl } = useContext(authDataContext)
  const { getCurrentUser } = useContext(userDataContext)
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(serverUrl + "/api/auth/login", {
        email,
        password
      }, { withCredentials: true })
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const googleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, provider)
      let user = res.user;
      let name = user.displayName;
      let email = user.email;

      await axios.post(serverUrl + "/api/auth/googlelogin", {
        name,
        email
      }, { withCredentials: true })
      getCurrentUser();
      navigate("/");
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
        <span>Welcome to OneCart, place your order</span>
      </div>
      <div className="border w-[90%] max-w-150 h-125 bg-[#00000025] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex flex-col justify-center items-center">
        <form className="w-[90%] h-[90%] flex flex-col justify-start items-center gap-5" onSubmit={handleLogin}>
          <div className="w-[90%] h-12.5 bg-[#42656cae] flex justify-center items-center rounded-lg gap-2.5 py-5 cursor-pointer hover:bg-[#1b393fae] transition duration-300" onClick={googleLogin}><img src={google} alt="" className="w-6.25" />Login with google</div>
          <div className="w-full h-5 flex justify-center items-center gap-2.5">
            <div className="w-[40%] h-px bg-[#96969635]"></div> <div>OR</div> <div className="w-[40%] h-px bg-[#96969635]"></div>
          </div>
          <div className="w-[90%] h-100 gap-6 flex flex-col justify-center items-center">
            <input type="text" className="w-full h-12.5 border-2 border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="w-full relative">
              <input type={showPassword ? "text" : "password"} className="w-full h-12.5 border-2 border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <span className="absolute top-4 right-5 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEye className="w-5 h-5" /> : <IoMdEyeOff className="w-5 h-5" />}</span>
            </div>

            <button className="w-full mt-5 h-12.5 bg-[#6060f5] text-[17px] font-semibold rounded-lg flex justify-center items-center cursor-pointer hover:bg-[blue] transition duration-300">Login</button>
          </div>
          <p className="flex gap-2.5"><span>Don't have an account?</span> <span className="text-[#5555f6cf] text-[17px] font-semibold hover:underline cursor-pointer" onClick={() => navigate("/signup")}>Create new account</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login