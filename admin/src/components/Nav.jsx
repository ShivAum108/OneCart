import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";

function Nav() {
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);

  const handleLogout = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='w-full h-17.5 bg-[#dcdbdbf8] fixed top-0 z-10 flex justify-between items-center px-7.5 overflow-x-hidden shadow-md shadow-black'>
      <div className="w-[30%] h-full flex justify-start items-center gap-2.5 cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="" className="w-7.5" />
        <h1 className="text-black text-[25px] font-sans font-semibold">OneCart</h1>
      </div>
      <button className="text-[15px] hover:border-2 border-[#89daea] cursor-pointer bg-[#000000ca] py-2.5 px-5 rounded-2xl text-white" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Nav