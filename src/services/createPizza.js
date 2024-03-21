import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/init";

export default async function createPizza(pizza){
    const docRef = await addDoc(collection(db, "pizzas"), pizza);
    return docRef.id;
}