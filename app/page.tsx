import { Categories } from "@/src/components/Home/Categories/Categories"
import { HeroSection } from "@/src/components/Home/HeroSection/Hero"
import { Info } from "@/src/components/Home/Info/Info"
import { Start } from "@/src/components/Home/Start/Start"

export default function Home() {
  return (
    <main className=" ">
      <div className='mt-7'>
         <HeroSection/>
      </div>
      <div className="mt-20">
          <Info/>
      </div>
      <div className="mt-20">
        <Categories/>
      </div>
      <div className="mt-20">
        <Start/>
      </div>
    </main>
  )
}