

export function HeroSection() {
  return (
    <div className="hero-section flex flex-col items-center justify-center text-center text-white py-25 rounded-2xl bg-gradient-to-tr from-[#222538] via-[#12131A] to-[#494e6b] border border-slate-800">
      <div className="pill bg-gray-500/50 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">Bienvenido a Express Food</div>
      <h1 className="text-5xl mb-4 font-bold">Comida Deliciosa, <br/> Entregada a tu Puerta</h1>
      <p className="text-lg mb-4">Descubre los mejores platillos de tu ciudad. Pide ahora y disfruta de <br/> una experiencia gastronómica única.</p>
      <div className="button-section flex flex-wrap justify-center gap-4 mt-6">
        <button className="bg-white text-black px-6 py-3 rounded hover:bg-white/50 w-50 rounded">Ver Menu Completo</button>
        <button className="bg-transparent text-white px-6 py-3 rounded border border-white hover:bg-white hover:text-gray-900 ml-4 w-50 roundedcmd">Explora Combos</button>
      </div>
    </div>
  )
}