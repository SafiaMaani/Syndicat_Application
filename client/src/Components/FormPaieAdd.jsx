import { React, useState} from 'react'
import FormInput from './FormInput';
import axios from 'axios';
import Toaster from 'toastr'
import 'toastr/build/toastr.css'

function FormPaieAdd() {

  const [values, setValues] = useState({
    statut: "impayé",
    resident: "",
    appartement: 0,
    mois: "",
  });

  const inputs = [
    {
      id: 1,
      name: "statut",
      type: "text",
      placeholder: "statut du paiement",
      required: true,
    },
    {
      id: 2,
      name: "id_resid",
      type: "text",
      placeholder: "C'est qui le résident ?",
      required: true,
    },
    {
      id: 3,
      name: "id_appart",
      type: "text",
      placeholder: "N° de l'appartement",
      required: true,
    },
    {
      id: 4,
      name: "mois",
      type: "text",
      placeholder: "Quel mois ?",
      required: true,
    },
  ]

  const handleAdd= ()=>{
    axios.post(`http://localhost:9999/api/paiements/add`, values)
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

export default FormPaieAdd