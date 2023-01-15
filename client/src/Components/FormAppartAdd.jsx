import { React, useState} from 'react'
// import { useLocation } from 'react-router-dom'
import FormInput from './FormInput';
import axios from 'axios';

function FormAppartAdd() {
  // const location = useLocation();
  // const route = location.pathname.split('/')[2]

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
    {
      id: 4,
      name: "Statut",
      type: "select",
      placeholder: "Statut de l'appartement",
      required: true,
    },
  ]
  
  const handleAdd= ()=>{
    console.log("I clicked add");
    axios.post(`http://localhost:9999/api/appartements/add`, values)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err.response.data);
    })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
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

export default FormAppartAdd