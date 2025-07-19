import { Formik } from "formik";
import LoginUI from "./LoginUI";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginIndexPage(){
    const {isAuthenticated,login} = useAuth();
    const navigate = useNavigate();

    const [success, setSuccess] = useState(null);
    const [failed, setFailed] = useState(null);

    useEffect(()=> {
        if(isAuthenticated){
            navigate('/dashboard');
        }
    },[isAuthenticated,navigate])

    const url = 'https://reqres.in/api/login';

    const headers = {
        'x-api-key': 'reqres-free-v1'
    }

    const initialValues  = {
        email:'',
        password:''
    }

    const onSubmit = async (values) => {

        const payload = {
            "email": values.email,
            "password": values.password
        }
        await axios.post(url, payload, {headers: headers} )
        .then(response => response.data)
        .then(data => {
            const token = localStorage.setItem("token", data.token);
            login(token)
            setSuccess('Successful')
            navigate('/dashboard');
        })
        .catch(error => setFailed(error.response.data.error));

    }

    const validationSchema = Yup.object({
        email: Yup.string().required('required').email('invalid email'),
        password: Yup.string().required('required')
    })
    return(<>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <LoginUI 
                failed = {failed}
                setFailed = {setFailed}
            />
        </Formik>
    </>)
}