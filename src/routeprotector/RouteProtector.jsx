import { useNavigate } from "react-router-dom";

export default function RouteProtector({children}){
    const navigate = useNavigate()

    return(
        children
    )
}