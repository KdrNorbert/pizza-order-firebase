import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/init'

export default async function updatePizza(id, newPizzaData) {
    await updateDoc(doc(db, 'pizzas', id), newPizzaData);
    return { id, ...newPizzaData };
}
