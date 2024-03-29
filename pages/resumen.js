import Layout from "../layout/Layout"
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "../components/ResumenProducto";


export default function Resummen() {
    const { pedido } = useQuiosco();


    return(
        <Layout pagina='Resumen'> 
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-3xl mt-10">Revisa tu pedido</p>

            {pedido.lenght ===0 ? (
                <p className="text-center text=2xl">No hay elementos en tu pedido</p>
            ) : (
                pedido.map((producto) => (
                    <ResumenProducto 
                        key={producto.id}
                        producto={producto}
                    />
                ))
            )}
        </Layout>
    )

    
}