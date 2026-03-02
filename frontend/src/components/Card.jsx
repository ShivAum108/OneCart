import { useContext } from "react"
import { shopDataContext } from "../context/ShopContext"

function Card({ name, image, id, price }) {
    const { currency } = useContext(shopDataContext)
    return (
        <div className="w-75 max-w-[90%] h-100 bg-[#ffffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex flex-col justify-start items-start p-2.5 cursor-pointer border border-[#80808049]" key={id}>
            <img src={image} alt="" className="w-full h-[80%] rounded-sm object-cover" />
            <div className="text-[#c3f6fa] text-[18px] py-2.5">{name}</div>
            <div className="text-[#f3fafa] text-[14px]">{currency} {price}</div>
        </div>
    )
}

export default Card