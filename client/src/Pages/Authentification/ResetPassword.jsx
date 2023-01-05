import { React, useState } from 'react'
import {useParams} from 'react-router-dom'
import FormInput from '../../Components/FormInput';
import axios from 'axios'
import Toaster from 'toastr'
import 'toastr/build/toastr.css'

function ResetPassword() {

    const [reset, setReset] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [values, setValues] = useState({
        password: "",
        passwordConfirmation: ""
    });

    const inputs = [
        {
            id: 1,
            name: "password",
            type: "password",
            placeholder: "Nouveau Password",
            errorMessage: "",
            label: "Email",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 2,
            name: "passwordConfirmation",
            type: "password",
            placeholder: "Nouveau Password Confirmation",
            errorMessage: "",
            label: "Email",
            pattern: values.password,
            required: true,
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:9999/api/auth/resetpassword/${token}`, values)
        .then((success) => {
            setReset(true);
            setError(null);
            setSuccess(success.data.message)
            Toaster.success(success.data.message, 'Success', {
                positionClass: "toast-bottom-right"
            })
        })
        .catch((error) => {
            setError(error.response.data.message);
            setReset(false);
            setSuccess(null)
            console.log(error)

            if (error.response.data.message) {
                Toaster.warning(error.response.data.message, 'warning!', {
                positionClass: "toast-bottom-right"
                })
            }
        });
    }
    let {token} = useParams()

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left w-1/2">
        <h1 className="text-5xl font-bold">Create your new password!</h1>
        <p className="py-6">Entrez votre Nouveau mot de passe et confirmez-le !</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            <form className="mt-6" onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput 
                        key={input.id}
                        {...input}
                        onChange={handleChange}
                    />
                ))}
                <div className="mt-6">
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Reset Password</button>
                </div>
                </div>
            </form>
            </div>
        </div>
      </div>
    </div>
);
}

export default ResetPassword