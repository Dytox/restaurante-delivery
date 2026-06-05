import {ArrowRight} from "lucide-react"

export const Start = () =>{
    return(
        <div className="bg-gray-200 w-full h-70 rounded-2xl flex items-center justify-center p-6">
            <div className="start-content text-center flex flex-col gap-4 items-center justify-center">
                <h2 className="text-3xl ">Listo para ordenar?</h2>
                <p className="text-gray-600 text-xl" >Más de 100 platillos disponibles. Delivery y pickup disponibles.</p>
                <button className="bg-[#12131A] w-50 text-white px-6 py-3 rounded-lg hover:bg-[#12131A]/90 hover:scale-105 transition-transform">Ordena Ahora<span><ArrowRight className="inline-block ml-2" /></span></button>
            </div>
        </div>
    )
}