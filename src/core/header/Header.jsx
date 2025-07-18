import { Link } from "react-router-dom";

export default function Header(){
    return(<>
        <nav className="container-fluid p-3 bg-light d-flex flex-wrap justify-content-end gap-3"> 
            <Link to='/' className="nav nav-link text-uppercase">Todo App</Link>
            <Link to='/about' className="nav nav-link text-uppercase">About</Link>
            <Link to='/contact' className="nav nav-link text-uppercase">Contact</Link>
            <Link to='/product' className="nav nav-link text-uppercase">Product</Link>
            <Link to='/login' className="btn btn-outline-primary">Login</Link>
        </nav>
    </>)
}