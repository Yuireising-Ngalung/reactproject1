export default function ContactUI(){
    return(<>
        <div className="container my-5">
            <h2>CONTACT PAGE</h2>
            <hr />
            <section className="shadow p-5 rounded shadow border-top border-5 border-primary p-md-5 py-4 px-4">
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="fw-bold">Name</label>
                        <input type="text" id="name" name="name" placeholder="enter username" className="form-control"/>
                    </div> 

                    <div className="form-group mb-3">
                        <label htmlFor="email" className="fw-bold">Email</label>
                        <input type="email" id="email" name="email" placeholder="enter email id" className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="message" className="fw-bold">Message</label>
                        <textarea name="message" id="message" className="form-control" placeholder="enter your message"></textarea>
                    </div>

                    <div className="d-flex gap-3">
                        <button className="btn btn-primary text-uppercase">send message</button>
                        <button className="btn btn-danger text-uppercase">cancel</button>
                    </div>
                </form>
            </section>

            
        </div>
    </>)
}