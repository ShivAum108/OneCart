import { useContext, useEffect, useState } from "react"
import Title from "./Title"
import { shopDataContext } from "../context/ShopContext"
import Card from "./Card"

function BestSeller() {
  const {products} = useContext(shopDataContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    let filteredProducts = products.filter(item => item.bestSeller)
    setBestSeller(filteredProducts.slice(0,4))
  }, [products])
  return (
    <div>
      <div className="w-full h-[8%] mt-12.5 text-center">
          <Title text1={"BEST"} text2={"SELLER"} />
          <p className="w-full m-auto text-[13px] md:text-[20px] px-2.5 text-blue-100">Tried, Tested, Loved | Discover Our All-Time Best Sellers</p>
          <div className="w-full h-[50%] mt-7.5 flex justify-center items-center flex-wrap gap-12.5">
            {
              bestSeller.map((item, index) => (
                <Card key={index} id={item._id} name={item.name} image={item.image1} price={item.price}/>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default BestSeller