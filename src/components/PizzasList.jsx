import { Link } from "react-router-dom";
import deletePizza from "../services/deletePizza";

export default function PizzasList({ pizzas, setPizzas }) {

    async function handlePizzaDelete(id){
        deletePizza(id).then(setPizzas(pizzas.filter((currentPizza) => currentPizza.id !== id)))
    };

    return (
        <tbody>
            {pizzas ? pizzas.map(({ orderDate, id, email, base, size, toppings }) => (
                <tr key={id} className="bg-white border-b">
                    <td className="px-6 py-4">{orderDate}</td>
                    <td className="px-6 py-4">{id}</td>
                    <td className="px-6 py-4">{email}</td>
                    <td className="px-6 py-4">{base}</td>
                    <td className="px-6 py-4">{size}</td>
                    <td className="px-6 py-4">{toppings.length >= 1  ? toppings.join(', ') : "No topping selected"}</td>
                    <td className="px-6 py-4 h-full flex gap-2 justify-center items-center">
                        <Link to={`/edit-pizza/${id}`} className="px-3 py-2 bg-yellow-500 rounded-xl" >Update</Link>
                        <button className="px-3 py-2 text-white bg bg-red-500 rounded-xl" onClick={() => handlePizzaDelete(id)}>Delete</button>
                    </td>
                </tr>
            ))
                : ""
            }
        </tbody>
    )
}
