import { React, useState} from 'react'
import FormInput from './FormInput';
import axios from 'axios';
import Toaster from 'toastr'
import 'toastr/build/toastr.css'

function FormResidentAdd() {

  const [values, setValues] = useState({
    fullName: "",
    cin: "",
    tel: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Nom complet du résident",
      required: true,
    },
    {
      id: 2,
      name: "cin",
      type: "text",
      placeholder: "N° de carte nationale",
      required: true,
    },
    {
      id: 3,
      name: "tel",
      type: "text",
      placeholder: "N° de téléphone",
      required: true,
    },
  ]
  
  const handleAdd= ()=>{
    axios.post(`http://localhost:9999/api/residents/add`, values)
    .then((res) => {
      Toaster.success(res.data.message, 'Success', {
        positionClass: "toast-bottom-right"
    })
    }).catch((err) => {
      if (err.response.data.message) {
        Toaster.warning(err.response.data.message, 'warning!', {
          positionClass: "toast-bottom-right"
        })
      }
    })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        {inputs.map((input) => (
          <FormInput 
            key={input.id}
            {...input}
            onChange={handleChange}
          />
        ))}
        <div className="modal-action">
          <label htmlFor="my-modal" className="btn btn-primary" onClick={handleAdd}>Ajouter</label>
        </div>
      </form>
    </div>
  )
}

export default FormResidentAdd