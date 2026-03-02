import { useContext, useEffect, useState } from "react"
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import { authDataContext } from "../context/AuthContext";
import axios from "axios";


function List() {
  const [list, setList] = useState([]);
  const { serverUrl } = useContext(authDataContext);

  const fetchList = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/product/listproduct", { withCredentials: true });
      setList(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const removeProduct = async (id) => {
    try {
      const result = await axios.delete(serverUrl + `/api/product/removeproduct/${id}`, { withCredentials: true });
      if (result.data) {
        fetchList()
      } else {
        console.log("failed to remove product")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchList()
  }, []);
  return (
    <div className="w-screen min-h-screen bg-linear-to-l from-[#141414] to-[#0c2025] text-white">
      <Nav />
      <div className="w-full h-full flex justify-start items-center">
        <Sidebar />

        <div className="w-[82%] h-full lg:ml-80 md:ml-57.5 mt-17.5 flex flex-col gap-7.5 overflow-hidden py-12.5 ml-25">
          <div className="w-100 h-12.5 text-[28px] md:text-[40px] mb-5 text-white">All Listed Products</div>

          {
            list.length > 0
              ?
              (
                list.map((item) => (
                  <div className="w-[90%] h-22.5 md:h-30 bg-slate-600 rounded-xl flex justify-start items-center gap-1.25 md:gap-7.5 p-2.5 md:px-7.5" key={item._id}>
                    <img src={item.image1} alt="" className="w-[30%] h-[90%] md:w-30 rounded-lg" />
                    <div className="w-[90%] h-[80%] flex flex-col justify-center items-start gap-0.5">
                      <div className="w-full md:text-[20px] text-[15px] text-[#bef0f3]">{item.name}</div>
                      <div className="md:text-[17px] text-[15px] text-[#bef3da]">{item.category}</div>
                      <div className="md:text-[17px] text-[15px] text-[#bef3da]">₹{item.price}</div>
                    </div>
                    <div className="w-[10%] h-full bg-transparent flex justify-center items-center">
                      <span className="w-8.75 h-[30%] flex justify-center items-center rounded-md md:hover:bg-red-300 md:hover-text-black cursor-pointer" onClick={() => removeProduct(item._id)}>X</span>
                    </div>
                  </div>
                ))
              )
              :
              (
                <h1>No products available</h1>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default List