import { useState } from "react"
import { useNavigate } from "react-router-dom";
import createPizza from "../services/createPizza";
import updatePizza from "../services/updatePizza";

const initialValues = {
    orderDate: new Date().toLocaleDateString(),
    email: "",
    base: "",
    size: "",
    toppings: []
}

export default function OrderPizzaForm({ pizzaDatas }) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(pizzaDatas || initialValues);

    function handleToppings(value){
        if(formData.toppings.includes(value)){
            setFormData({...formData, toppings: formData.toppings.filter((currentTopping) => currentTopping !== value)});
        }else{
            setFormData({...formData, toppings: [...formData.toppings, value]});
        }
    }

    async function handleSubmitPizzaForm(e){
        e.preventDefault();
        if(formData.email === ""){
            return alert("Fill the e-mail!");
        } else if(formData.size === ""){
            return alert("Select a size!");
        } else if(formData.base === ""){
            return alert("Select a base souce");
        } else {
            if(pizzaDatas){
                try{
                    await updatePizza(pizzaDatas.id, formData);
                    navigate("/");
                }
                catch(e){
                    alert("Something went wrong please try again later!" + e);
                }
            }else{
                try{
                    await createPizza(formData);
                    navigate("/");
                }
                catch(e){
                    alert("Something went wrong please try again later!");
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmitPizzaForm} className="w-3/5 mx-auto flex justify-center items-center flex-col">
            <div className="mb-5 w-full">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gamil.com" required />
            </div>
            <div className="mb-5 w-full">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Size</label>
                <select id="countries" value={formData.size} onChange={(e) => setFormData({ ...formData, size: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="" disabled>Choose a size</option>
                    <option value="32cm">32 cm</option>
                    <option value="40cm">40 cm</option>
                    <option value="56cm">56 cm</option>
                </select>
            </div>
            <div className="mb-5 w-full">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Base souce</label>
                <select id="countries" value={formData.base} onChange={(e) => setFormData({ ...formData, base: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="" disabled>Choose a base souce</option>
                    <option value="tomato">Tomato</option>
                    <option value="mayo">Mayonase</option>
                    <option value="gyros">Gyros</option>
                </select>
            </div>
            <div className="mb-5 w-full grid grid-cols-2 grid-rows-3">
                <label>
                    <input className="mr-2" type="checkbox" value={"onions"} checked={formData.toppings?.includes("onions")} onChange={(e) =>handleToppings(e.target.value)}/>
                    Onions
                </label>
                <label>
                    <input className="mr-2" type="checkbox" value={"ham"} checked={formData.toppings?.includes("ham")} onChange={(e) =>handleToppings(e.target.value)}/>
                    Ham
                </label>
                <label>
                    <input className="mr-2" type="checkbox" value={"pepperoni"} checked={formData.toppings?.includes("pepperoni")} onChange={(e) =>handleToppings(e.target.value)}/>
                    Pepperoni
                </label>
                <label>
                    <input className="mr-2" type="checkbox" value={"pineapple"} checked={formData.toppings?.includes("pineapple")} onChange={(e) =>handleToppings(e.target.value)}/>
                    Pineapple
                </label>
                <label>
                    <input className="mr-2" type="checkbox" value={"corn"} checked={formData.toppings?.includes("corn")} onChange={(e) =>handleToppings(e.target.value)}/>
                    Corn
                </label>
                <label>
                    <input className="mr-2" type="checkbox" value={"mushroom"} checked={formData.toppings?.includes("mushroom")} onChange={(e) =>handleToppings(e.target.value)}/>
                    Musroom
                </label>
            </div>
            <button type="submit" className="my-5 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}
