import  logo  from '@/public/logo/restaurant-logo.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
    <nav className="navbar flex items-center justify-between px-8">
        <div className="nav-container flex items-center gap-12">
            <div className="logo-section flex gap-2 items-center align-middle ">
              <Image src={logo} alt="Logo" width={50} height={50} className="m-0 p-0" />
              <span className="logo-text font-bold text-xl">ExpressFood</span>
            </div>
            <div className="menu-section gap-6 flex">
              <button className="menu-item hover:text-blue-500">Inicio</button>
              <button className="menu-item hover:text-blue-500">Menu</button>
              <button className="menu-item hover:text-blue-500">A Cerca De</button>
              <button className="menu-item hover:text-blue-500">Contactenos</button>
            </div>
        </div>
        <div className="user-section">
            <button className="bg-[black] text-white p-2 font-semibold rounded hover:bg-gray-800"> Ver Pedidos</button>
        </div>
    </nav>
    </>
  )
}