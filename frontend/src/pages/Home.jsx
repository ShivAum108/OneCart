import { useEffect, useState } from "react"
import Background from "../components/Background";
import Hero from "../components/Hero";
import Product from "./Product";
import OurPolicy from "../components/OurPolicy";


function Home() {
  let heroData = [
    { text1: "30% OFF Limited offer", text2: "Style that" },
    { text1: "Discover the best of bold fashion", text2: "Limited Time Only" },
    { text1: "Explore Our Best Collection", text2: "Shop Now!" },
    { text1: "Choose Your Perfect Fashion Fit", text2: "Now on Sale!" }
  ]
  const [heroCount, setHeroCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount == 3 ? 0 : prevCount + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="overflow-x-hidden relative top-17.5">
      <div className="w-full lg:h-screen md:h-[50vh] h-[40vh] flex bg-linear-to-l from-[#141414] to-[#0c025]">
        <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]} />
        <Background heroCount={heroCount} />
      </div>
      <Product />
      <OurPolicy />
    </div>
  )
}

export default Home