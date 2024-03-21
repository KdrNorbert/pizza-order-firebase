import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="h-16 bg-gray-700 text-white flex justify-center items-center gap-10">
            <Link
                to={"/"}
            >
                Previous Orders
            </Link>
            <Link
                to={"/order-pizza"}
            >
                Order Pizza
            </Link>
        </header>
    )
}
