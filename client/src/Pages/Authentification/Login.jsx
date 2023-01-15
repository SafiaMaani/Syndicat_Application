import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import FormInput from '../../Components/FormInput';
import axios from 'axios'
import Toaster from 'toastr'
import 'toastr/build/toastr.css'

function Login() {
  const navigate = useNavigate()

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs  = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "",
      label: "Email",
      pattern: ".+\@.+\..+",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "",
      label: "Password",
      required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9999/api/auth/login", values)
    .then((success) => {
        setError(null)
        setSuccess(success.data.message)
        const localStorage= {
          token: success.data.token,
          userName: success.data.user.fullName
        }
        window.localStorage.setItem("localStorage", JSON.stringify(localStorage));
        Toaster.success(success.data.message, 'Success', {
            positionClass: "toast-bottom-right"
        })
        navigate('/dashboard')
    })
    .catch((error) => {
        setError(error.response.data.message)
        setSuccess(null)
        if (error.response.data.message) {
            Toaster.warning(error.response.data.message, 'warning!', {
              positionClass: "toast-bottom-right"
            })
          }
    })
  } 
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Bienvenue dans votre syndical application !</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput 
                        key={input.id}
                        {...input}
                        onChange={handleChange}
                    />
                ))}
                <Link to={'/forgetpassword'} className="text-xs hover:underline">Forget Password?</Link>  
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login