import { useParams } from "react-router-dom";
import OrderPizzaForm from "../components/OrderPizzaForm";
import { useEffect, useState } from "react";
import readPizza from "../services/readPizza";


export default function EditPizza() {

    const { pizzaId } = useParams();

    const [ pizzaDatas, setPizzaDatas ] = useState({});

    useEffect(() => {
        readPizza(pizzaId).then(setPizzaDatas);
    }, []);


    return (
        <>
            <h1 className="w-fit mx-auto my-10 font-bolder text-4xl">Edit Order</h1>
            {pizzaDatas.email && <OrderPizzaForm pizzaDatas={{id: pizzaId, ...pizzaDatas}} />}
        </>
    )
}
