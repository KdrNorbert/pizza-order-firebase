import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/init'

export default async function readPizza(id){
    const pizza = await getDoc(doc(db, 'pizzas', id));
    return pizza.data();
}