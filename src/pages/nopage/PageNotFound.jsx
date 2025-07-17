import { Link } from "react-router-dom";

export default function PageNotFound(){
    return(<>
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{height: '80vh'}}>
            <h1>404 - Page not found</h1>
            <Link to='/'>Back to home</Link>
        </div>
    </>)
}