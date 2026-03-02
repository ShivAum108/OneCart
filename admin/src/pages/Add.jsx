import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import upload from "../assets/uploadimage.jpg"
import { useContext, useState } from "react"
import { authDataContext } from "../context/AuthContext"
import axios from "axios"

function Add() {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Men")
  const [price, setPrice] = useState("")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestSeller, setBestSeller] = useState(false)
  const [sizes, setSizes] = useState([])
  const { serverUrl } = useContext(authDataContext);

  const handleAddProduct = async (e) => {
    e.preventDefault()
    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      const result = await axios.post(serverUrl + "/api/product/addproduct", formData, { withCredentials: true });
      if (result.data) {
        setName("")
        setDescription("")
        setPrice("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setBestSeller(false);
        setCategory("Men")
        setSubCategory("Topwear")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full min-h-screen bg-linear-to-l from-[#141414] to-[#0c2025] text-white overflow-x-hidden relative">
      <Nav />
      <Sidebar />

      <div className="w-[82%] h-full bottom-[5%] flex justify-start items-center overflow-x-hidden absolute right-0">
        <form className="w-full md:w-[90%] h-full mt-18 flex flex-col gap-7.5 py-15 px-7.5 md:px-15" onSubmit={handleAddProduct}>
          <div className="w-100 h-12.5 text-[25px] md:text-[40px]">Add Product Page</div>
          <div className="w-[80%] h-32.5 flex flex-col justify-center items-start mt-5 gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold">Upload Images</p>
            <div className="w-full h-full flex justify-start items-center">
              <label htmlFor="image1" className="w-16.25 h-16.25 md:w-25 md:h-25 cursor-pointer hover:border-[#46d1f7]">
                <img src={!image1 ? upload : URL.createObjectURL(image1)} alt="" className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d]" />
                <input type="file" id="image1" hidden required onChange={(e) => setImage1(e.target.files[0])} />
              </label>
              <label htmlFor="image2" className="w-16.25 h-16.25 md:w-25 md:h-25 cursor-pointer hover:border-[#46d1f7]">
                <img src={!image2 ? upload : URL.createObjectURL(image2)} alt="" className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d]" />
                <input type="file" id="image2" hidden required onChange={(e) => setImage2(e.target.files[0])} />
              </label>
              <label htmlFor="image3" className="w-16.25 h-16.25 md:w-25 md:h-25 cursor-pointer hover:border-[#46d1f7]">
                <img src={!image3 ? upload : URL.createObjectURL(image3)} alt="" className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d]" />
                <input type="file" id="image3" hidden required onChange={(e) => setImage3(e.target.files[0])} />
              </label>
              <label htmlFor="image4" className="w-16.25 h-16.25 md:w-25 md:h-25 cursor-pointer hover:border-[#46d1f7]">
                <img src={!image4 ? upload : URL.createObjectURL(image4)} alt="" className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d]" />
                <input type="file" id="image4" hidden required onChange={(e) => setImage4(e.target.files[0])} />
              </label>
            </div>
          </div>
          <div className="w-[80%] h-25 flex flex-col justify-center items-start gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold">Product Name</p>
            <input type="text" placeholder="Type Here" className="w-150 max-w-[98%] h-10 rounded-lg hover:border-[#46d1f7] border-2 outline-none cursor-pointer bg-slate-600 px-5 text-[18px] placeholder:text-[#ffffffc2]" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="w-[80%] flex flex-col justify-center items-start gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold">Product Description</p>
            <textarea type="text" placeholder="Type Here" className="w-150 max-w-[98%] h-25 rounded-lg hover:border-[#46d1f7] border-2 outline-none cursor-pointer bg-slate-600 px-5 py-2.5 text-[18px] placeholder:text-[#ffffffc2] resize-none" required value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="w-[80%] flex items-center gap-2.5 flex-wrap">
            <div className="w-full md:w-[30%] flex flex-col sm:justify-center items-start gap-2.5">
              <p className="w-full text-[20px] md:text-[25px] font-semibold">Product Category</p>
              <select name="" id="" className="bg-slate-600 w-[60%] px-2.5 py-1.5 rounded-lg hover:border-[#46d1f7] border-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div className="w-full md:w-[30%] flex flex-col sm:justify-center items-start gap-2.5">
              <p className="w-full text-[20px] md:text-[25px] font-semibold">Sub-Category</p>
              <select name="" id="" className="bg-slate-600 w-[60%] px-2.5 py-1.5 rounded-lg hover:border-[#46d1f7] border-2" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>
          </div>
          <div className="w-[80%] h-25 flex flex-col justify-center items-start gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold">Product Price</p>
            <input type="number" placeholder="₹ 2000" className="w-150 max-w-[98%] h-10 rounded-lg hover:border-[#46d1f7] border-2 outline-none cursor-pointer bg-slate-600 px-5 text-[18px] placeholder:text-[#ffffffc2]" required value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className="w-[80%] h-55 md:h-25 flex flex-col justify-center items-start gap-2.5 py-2.5 md:py-0">
            <p className="text-[20px] md:text-[25px] font-semibold">Product Size</p>
            <div className="flex justify-start items-center gap-3.75 flex-wrap">
              <div className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${sizes.includes("S") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>S</div>

              <div className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${sizes.includes("M") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>M</div>

              <div className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${sizes.includes("L") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>L</div>

              <div className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${sizes.includes("XL") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>XL</div>

              <div className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${sizes.includes("XXL") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>XXL</div>
            </div>
          </div>

          <div className="w-[80%] flex justify-start items-center gap-2.5 mt-5">
            <input type="checkbox" id="checkbox" className="w-6.25 h-6.25 cursor-pointer" onChange={() => setBestSeller(prev => !prev)} />
            <label htmlFor="checkbox" className="text-[18px] md:text-[22px] font-semibold">Add to bestseller</label>
          </div>

          <button className="border w-35 px-2.5 py-2.5 rounded-xl bg-[#65d8f7] flex justify-center items-center gap-2.5 text-black active:bg-slate-700 active:text-white active:border-2 border-white cursor-pointer font-semibold text-[18px]">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default Add