import { React, useState} from 'react'
import FormInput from './FormInput';
import axios from 'axios';
import Toaster from 'toastr'
import 'toastr/build/toastr.css'

function FormAppartAdd() {

  const [values, setValues] = useState({
    Number: 0,
    rooms: 0,
    price: 0,
    Statut: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Number",
      type: "number",
      placeholder: "N° de l'appartement",
      required: true,
    },
    {
      id: 2,
      name: "rooms",
      type: "number",
      placeholder: "Nombre de chambres",
      required: true,
    },
    {
      id: 3,
      name: "price",
      type: "number",
      placeholder: "Prix de l'appartement",
      required: true,
    },
  ]
  const select = [
    {
      id: 4,
      name: "Statut",
      type: "select",
      options: [
        {
          name:'Loué',
          value: "Loué"
        },
        {
          name:'Vide',
          value: "Vide"
        }
      ],
      placeholder: "Selectionez le Statut de lappartement",
      required: true,
    }
  ]
  const handleAdd= ()=>{
    axios.post(`http://localhost:9999/api/appartements/add`, values)
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
    console.log({ ...values, [e.target.name]: e.target.value });
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

        {select.map((select) => (
          <FormInput
            key={select.id}
            {...select}
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

export default FormAppartAdd