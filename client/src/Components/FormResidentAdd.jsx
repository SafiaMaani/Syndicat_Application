import { React, useState} from 'react'
import FormInput from './FormInput';
import axios from 'axios';

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
    console.log("I clicked add");
    axios.post(`http://localhost:9999/api/residents/add`, values)
    .then((res) => {
      console.log(res.data);
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

export default FormResidentAdd