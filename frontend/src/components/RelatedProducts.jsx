import { useContext, useEffect, useState } from "react"
import { shopDataContext } from "../context/ShopContext"
import Title from "./Title";
import Card from "./Card";


function RelatedProducts({ category, subCategory, currentProductId }) {

    const { products } = useContext(shopDataContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item) => item.category === category);
            productsCopy = productsCopy.filter((item) => item.category === subCategory);
            productsCopy = productsCopy.filter((item) => item._id !== currentProductId)
            setRelated(productsCopy.slice(0, 4));
        }
    }, [products, category, subCategory, currentProductId])
    return (
        <div className="my-32.5 md:my-10 md:px-15">
            <div className="ml-5 lg:ml-20">
                <Title text1={"Related"} text2={"Products"} />
            </div>
            <div className="w-full mt-7.5 flex justify-center items-center flex-wrap gap-12.5">
                {related.map((item, index) => (
                    <Card key={index} id={item._id} image={item.image1} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts