import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card';

function LatestCollection() {
  const { products } = useContext(shopDataContext)
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 4))
  }, [products])
  return (
    <div>
      <div className='h-[8%] w-full text-center md:mt-12.5'>
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className='w-full m-auto text-[13px] md:text-[20px] px-2.5 text-blue-100'>Step into style - New Collection dropping this season</p>
      </div>
      <div className='w-full h-[50%] mt-7.5 flex justify-center items-center flex-wrap gap-12.5'>
        {
        latestProducts.map((items, index) => (
          <Card key={index} name={items.name} image={items.image1} id={items._id} price={items.price} />
        ))
        }
        </div>
    </div>
  )
}

export default LatestCollection