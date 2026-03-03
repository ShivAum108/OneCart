import { useContext, useEffect, useState } from "react"
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Title from "../components/Title";
import { shopDataContext } from "../context/ShopContext";
import Card from "../components/Card";


function Collections() {
  let [showFilter, setShowFilter] = useState(false);
  const { products, search, showSearch } = useContext(shopDataContext)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");


  const applyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilteredProducts(productCopy);
  }

  const toggleCategory = async (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = async (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const sortProducts = (e) => {
    let filteredProductsCopy = filteredProducts.slice()
    switch (sortType) {
      case "low-high":
        setFilteredProducts(filteredProductsCopy.sort((a, b) => (a.price - b.price)))
        break;

      case "high-low":
        setFilteredProducts(filteredProductsCopy.sort((a, b) => b.price - a.price))
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    sortProducts()
  }, [sortType])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch])

  return (
    <div className="min-h-screen pb-25 bg-linear-to-l from-[#141414] to-[#0c2025] flex flex-col md:flex-row justify-start pt-17.5 overflow-x-hidden">
      <div className={`w-full md:w-[30vw] lg:w-[20vw] md:min-h-screen ${showFilter ? "h-auto" : "h-[8vh]"} p-5 border-r border-gray-400 text-[#aaf5fa]`}>
        <p className="text-[25px] font-semibold flex items-center justify-start gap-1.25 cursor-pointer" onClick={() => setShowFilter(prev => !prev)}>
          FILTERS
          {!showFilter && <FaAngleRight className="text-[18px] md:hidden" />}
          {showFilter && <FaChevronDown className="text-[18px] md:hidden" />}
        </p>
        <div className={`border-2 border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}>
          <p className="text-[18px] text-[#f8fafa]">CATEGORIES</p>
          <div className="w-57.5 h-30 flex flex-col justify-center items-start gap-2.5">
            <p className="flex justify-center items-center gap-2.5 font-light"><input type="checkbox" value={"Men"} className="w-3" onChange={toggleCategory} />Men</p>
            <p className="flex justify-center items-center gap-2.5 font-light"><input type="checkbox" value={"Women"} className="w-3" onChange={toggleCategory} />Women</p>
            <p className="flex justify-center items-center gap-2.5 font-light"><input type="checkbox" value={"Kids"} className="w-3" onChange={toggleCategory} />Kids</p>
          </div>
        </div>
        <div className={`border-2 border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}>
          <p className="text-[18px] text-[#f8fafa]">SUB-CATEGORIES</p>
          <div className="w-57.5 h-30 flex flex-col justify-center items-start gap-2.5">
            <p className="flex justify-center items-center gap-2.5 font-light"><input type="checkbox" value={"Topwear"} className="w-3" onChange={toggleSubCategory} />Topwear</p>
            <p className="flex justify-center items-center gap-2.5 font-light"><input type="checkbox" value={"Bottomwear"} className="w-3" onChange={toggleSubCategory} />Bottomwear</p>
            <p className="flex justify-center items-center gap-2.5 font-light"><input type="checkbox" value={"Winterwear"} className="w-3" onChange={toggleSubCategory} />Winterwear</p>
          </div>
        </div>
      </div>
      <div className="md:py-2.5">
        <div className="w-full md:w-[80vw] p-5 lg:px-12.5 flex flex-col lg:flex-row justify-between">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select name="" id="" className="w-[60%] bg-slate-600 md:w-50 h-12.5 px-2.5 text-white rounded-lg hover:border-[#4631f7] border-2" onChange={(e) => setSortType(e.target.value)}>
            <option value="relevant" className="w-full h-full">Sort by: Relevant</option>
            <option value="low-high" className="w-full h-full">Sort by: Low to High</option>
            <option value="high-low" className="w-full h-full">Sort by: High to Low</option>
          </select>
        </div>
        <div className="w-screen md:w-[60vw] lg:w-[80vw] min-h-[70vh] flex justify-center items-center flex-wrap gap-7.5">
          {
            filteredProducts.map((item, index) => (
              <Card key={index} id={item._id} image={item.image1} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collections