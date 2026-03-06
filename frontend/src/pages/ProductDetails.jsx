import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { shopDataContext } from "../context/ShopContext"


function ProductDetails() {
    const { productId } = useParams()
    const { products, currency } = useContext(shopDataContext)
    const [productData, setProductData] = useState([]);

    const [image, setImage] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [size, setSize] = useState("");

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                setImage1(item.image1)
                setImage2(item.image2)
                setImage3(item.image3)
                setImage4(item.image4)
                setImage(item.image1)

                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData()
    }, [productId, products])

    return productData ? (
        <div>
            <div className="lg:w-[99vw] w-[screen] h-[130vh] md:h-screen bg-linear-to-l from-[#141414] to-[#0c2025] flex flex-col lg:flex-row items-center justify-start gap-5">
                <div className="lg:w-[50vw] md:w-[90vw] h-[50vh] lg:h-[90vh] mt-17.5 flex flex-col-reverse lg:flex-row justify-center items-center gap-7.5 md:gap-2.5">
                    <div className="border md:w-[80%] lg:w-[20%] h-[10%] lg:h-[80%] flex lg:flex-col flex-wrap justify-center items-center gap-12.5 lg:gap-5">
                        <div className="w-12.5 md:w-25 h-12.5 md:h-27.5 bg-slate-300 border border-[#80808049] rounded-md" onClick={() => setImage(image1)}>
                            <img src={image1} alt="" className="w-full h-full cursor-pointer rounded-md" />
                        </div>
                        <div className="w-12.5 md:w-25 h-12.5 md:h-27.5 bg-slate-300 border border-[#80808049] rounded-md" onClick={() => setImage(image2)}>
                            <img src={image2} alt="" className="w-full h-full cursor-pointer rounded-md" />
                        </div>
                        <div className="w-12.5 md:w-25 h-12.5 md:h-27.5 bg-slate-300 border border-[#80808049] rounded-md" onClick={() => setImage(image3)}>
                            <img src={image3} alt="" className="w-full h-full cursor-pointer rounded-md" />
                        </div>
                        <div className="w-12.5 md:w-25 h-12.5 md:h-27.5 bg-slate-300 border border-[#80808049] rounded-md" onClick={() => setImage(image4)}>
                            <img src={image4} alt="" className="w-full h-full cursor-pointer rounded-md" />
                        </div>
                    </div>
                    <div className="w-[80%] lg:w-[60%] h-[70%] lg:h-[78%] border border-[#80808049] rounded-md overflow-hidden">
                        <img src={image} alt="" className="w-full h-full lg:h-full text-[30px] text-white text-center rounded-md object-fill" />
                    </div>
                </div>
                <div className="border border-white lg:w-[50vw] w-screen lg:h-[75vh] h-[40vh] lg:mt-20 flex justify-start items-start flex-col py-5 px-7.5 md:pb-5 md:pl-5 lg:pl-0 lg:px-0 lg:py-0 gap-2.5">

                </div>
            </div>
        </div>
    ) : (
        <div className="opacity-0"></div>
    )
}

export default ProductDetails