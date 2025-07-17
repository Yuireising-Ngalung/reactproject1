export default function Footer(){

    // const d = new Date();
    // let year = d.getFullYear();
    return(<>
        <div className="container-fluid bg-dark text-light text-center p-2">
            &copy; All rights reserved <em>{new Date().getFullYear()}</em>
        </div>
    </>)
}