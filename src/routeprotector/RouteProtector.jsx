import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RouteProtector({children}){
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated) {
        return(<Navigate to='/login' />)
    }

    return children;
}