import Navbar from "@/src/components/Common/Navbar/navbar"
import { HeroSection } from "@/src/components/Home/HeroSection/hero"
import { Info } from "@/src/components/Home/Info/info"

export default function Home() {
  return (
    <main className=" ">
      <div className='mt-7'>
         <HeroSection/>
      </div>
      <div className="mt-7">
          <Info/>
      </div>
    </main>
  )
}