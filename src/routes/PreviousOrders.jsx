import { useEffect, useState } from "react";
import readPizzas from "../services/readPizzas";
import PizzasList from "../components/PizzasList";


export default function PreviousOrders() {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        readPizzas().then(setPizzas);
    }, []);

    return (
        <table className="w-full mx-auto text-sm rtl:text-right text-gray-500 text-center">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Order date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Order Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Base
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Size
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Toppings
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <PizzasList pizzas={pizzas} setPizzas={setPizzas} />
            </table>
    )
}
