export default function LoginIndexPage(){
    return(<>
        <div className="container my-5">
            <h2 className="text-uppercase">Login</h2>
            <hr />
            <form className="rounded shadow border-top border-5 border-primary p-5 py-4 px-4">
                <div className="form-group mb-3">
                    <label htmlFor="email" className="fw-bold">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-control"
                        placeholder="enter your email id" 
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password" className="fw-bold">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="enter your password"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </>)
}