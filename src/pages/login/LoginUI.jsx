import { ErrorMessage, Field, Form } from "formik";
import Alert from 'react-bootstrap/Alert';

export default function LoginUI({failed,setFailed}){
    return(<>
        <div className="container my-5">
            <h2 className="text-uppercase">Login</h2>
            <hr />
            <Form className="rounded shadow border-top border-5 border-primary p-md-5 py-4 px-4">
                {failed && 
                    <Alert className="alert-danger" dismissible onClick ={()=> setFailed(null)}>
                        <strong>{failed}</strong>
                    </Alert>
                }
                <div className="form-group mb-3">
                    <label htmlFor="email" className="fw-bold">Email</label>
                    <Field type='email' name='email' id="email" className="form-control" placeholder="enter your email id" />
                    <ErrorMessage name="email" component='p' className="text-danger"/>  
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password" className="fw-bold">Password</label>
                    <Field type="password" name='password' id="password" className='form-control' placeholder='enter your pasword' />
                    <ErrorMessage name="password" component='p' className="text-danger"/>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </Form>
        </div>
    </>)
}