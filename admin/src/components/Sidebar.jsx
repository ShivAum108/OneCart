import { IoIosAddCircle } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="w-[18%] min-h-screen py-15 border-r fixed left-0 top-0">
      <div className="flex flex-col gap-1 pt-10 pl-[20%] text-[15px]">
        <div className="flex justify-center items-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]" onClick={() => navigate("/add")}>
          <IoIosAddCircle className="w-5 h-5" />
          <p className="hidden md:block">Add items</p>
        </div>
        <div className="flex justify-center items-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]" onClick={() => navigate("/list")}>
          <IoIosListBox className="w-5 h-5" />
          <p className="hidden md:block">List items</p>
        </div>
        <div className="flex justify-center items-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]" onClick={() => navigate("/orders")}>
          <SiTicktick className="w-5 h-5" />
          <p className="hidden md:block">View orders</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar