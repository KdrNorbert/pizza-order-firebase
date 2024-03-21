import { getDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/init'

export default async function deletePizza(id){
    await deleteDoc(doc(db, "pizzas", id));
}