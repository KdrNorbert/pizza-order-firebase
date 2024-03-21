import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/init'

export default async function readPizzas(){
    const querrySnapshot = await getDocs(collection(db, 'pizzas'));

    const pizzas = [];

    querrySnapshot.forEach((doc) => {
        pizzas.push({ id: doc.id, ...doc.data() })
    });

    return pizzas;
}