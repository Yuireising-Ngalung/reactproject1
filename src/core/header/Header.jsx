import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header(){
    const {isAuthenticated,logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return(<>
        <nav className="container-fluid p-3 bg-light"> 
            <div className="container d-flex justify-content-between gap-2">
                <div>
                <Link to='/' className="nav nav-link">LOGO</Link>
                </div>

                <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <Link to='/' className="nav nav nav-link text-uppercase">Todo App</Link>
                    <Link to='/about' className="nav nav-link text-uppercase">About</Link>
                    <Link to='/contact' className="nav nav-link text-uppercase">Contact</Link>
                </div>
                
                <div>
                    
                    {
                        isAuthenticated
                        ?
                            <Link className="btn btn-outline-warning" onClick={handleLogout}>Logout</Link>
                        :
                            <Link to='/login' className="btn btn-outline-primary">Login</Link>
                    }
                    
                    
                    
                </div>
            </div>  
        </nav>
    </>)
}