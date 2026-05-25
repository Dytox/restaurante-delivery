import truck from "bootstrap-icons/icons/truck.svg"
import clock from "bootstrap-icons/icons/clock.svg" 
import star from "bootstrap-icons/icons/star.svg"   


export const Info = () => {

    const items = [
        {
            icon: clock,
            title: "Entrega rapida",
            description: "Recibe tu pedido en tiempo récord, garantizado"
        },
        {
            icon: truck,
            title: "Delivery Gratis",
            description: "Disfruta de envío gratuito en todos tus pedidos, sin importar el monto"
        },
        {
            icon: star,
            title: "Calidad Garantizada",
            description: "Ingredientes frescos y de alta calidad en cada plato que preparamos para ti"
        }
    ]


    return (
        <div className="flex flex-wrap text-center h-full justify-between">
            {items.map((item, index) => (
                <div key={index} className="border-2 w-[30%] border-gray-400 hover:border-gray-600 rounded-lg w-80 p-6  items-center ">
                    <div className="card-header flex items-center gap-4">
                        <div className="icon-bg bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                            <img src={item.icon} alt={item.title} className="w-6 h-6"/>
                        </div>
                        
                    </div>
                    <div className="card-body mt-2 text-center flex flex-col gap-2">
                        <h5 className="text-lg font-bold">{item.title}</h5>
                        <p className="text-gray-600">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}