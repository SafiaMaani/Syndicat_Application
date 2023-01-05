import { React, useState } from 'react'
import FormInput from '../../Components/FormInput';
import axios from 'axios'
import Toaster from 'toastr'
import 'toastr/build/toastr.css'

function ForgetPassword() {

    const [forgotten, setForgotten] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const [values, setValues] = useState({
        email: ""
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "",
            label: "Email",
            pattern: ".+\@.+\..+",
            required: true,
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:9999/api/auth/forgetpassword", values)
        .then((success) => {
          setForgotten(true);
          setError(null);
          setSuccess(success.data.message)
          Toaster.success(success.data.message, 'Success', {
            positionClass: "toast-bottom-left"
          })
        })
        .catch((error) => {
          setError(error.response.data.message);
          setForgotten(false);
          setSuccess(null)
          if (error.response.data.message) {
            Toaster.warning(error.response.data.message, 'warning!', {
              positionClass: "toast-bottom-left"
            })
          }
        });
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

  return (
    <div className="relative flex flex-row justify-center hero min-h-screen bg-base-200">
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='w-1/2 flex justify-center'>
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">You forget your Password!</h1>
          <p className="py-6">Entrez votre email pour le réinititialiser !</p>
        </div>
        </div>
        <div className="w-1/2 p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <form className="mt-6" onSubmit={handleSubmit}>

                {inputs.map((input) => (
                    <FormInput 
                        key={input.id}
                        {...input}
                        onChange={handleChange}
                    />
                ))}
                <div className="mt-6">
                    <button className="w-full btn btn-primary">
                        Send me an email
                    </button>
                </div>
            </form>
        </div>

      </div>
    </div>
);
}

export default ForgetPassword