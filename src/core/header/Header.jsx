import { Link } from "react-router-dom";

export default function Header(){
    return(<>
        <nav className="container-fluid p-3 bg-light d-flex justify-content-end gap-3"> 
            <Link to='/' className="btn btn-outline-primary">Home</Link>
            <Link to='/about' className="btn btn-outline-success">About</Link>
            <Link to='/contact' className="btn btn-outline-warning">Contact</Link>
            <Link to='/product' className="btn btn-outline-info">Product</Link>
        </nav>
    </>)
}