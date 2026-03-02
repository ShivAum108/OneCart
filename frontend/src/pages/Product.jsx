import BestSeller from "../components/BestSeller"
import LatestCollection from "../components/LatestCollection"

function Product() {
  return (
    <div className="w-screen min-h-screen bg-linear-to-l from-[#141414] to-[#0c2025] flex flex-col justify-start items-center py-5">
      <div className="w-full min-h-17.5 flex flex-col justify-center items-center gap-2.5">
        <LatestCollection />
      </div>
      <div className="w-full min-h-17.5 flex flex-col justify-center items-center gap-2.5">
        <BestSeller />
      </div>
    </div>
  )
}

export default Product