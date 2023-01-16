import { React, useState, useEffect} from 'react'
import FormInput from './FormInput';
import axios from 'axios';
import Toaster from 'toastr'
import 'toastr/build/toastr.css'

function FormPaieAdd() {
  const [dataResid, setDataResid] = useState([]);
  const [dataAppart, setDataAppart] = useState([]);

  useEffect(()=> {
  const fetchDataAppart = ()=>{
    axios.get("http://localhost:9999/api/appartements/getAllAppart")
    .then((res) =>{
      setDataAppart(res.data.result)
    }).catch((err) => {
      console.log(err);
    })
  }
    fetchDataAppart()
  },[])

  useEffect(()=> {
  const fetchDataResid = ()=>{
    axios.get("http://localhost:9999/api/residents/getAllResident")
    .then((res) =>{
      setDataResid(res.data.result)
    }).catch((err) => {
      console.log(err);
    })
  }
    fetchDataResid()
  },[])

  const [values, setValues] = useState({
    Statut: "",
    id_resid: "",
    id_appart: "",
    mois: "",
  });
  
  const inputs = [
    {
      id: 1,
      name: "mois",
      type: "text",
      placeholder: "Quel mois ?",
      required: true,
    },
  ]

  const appartementNumber = dataAppart.map(e => {
    return {
      name: e.Number,
      value: e._id
    }
  })
  const residentName = dataResid.map(e => {
    return {
      name: e.fullName,
      value: e._id
    }
  })

  const select = [
    {
      id: 2,
      name: "Statut",
      type: "select",
      options: [
        {
          name:'Payé',
          value: "Payé"
        }, 
        {
          name:'Impayé',
          value: "Impayé"
        },
      ],
      placeholder: "statut du paiement",
      required: true,
    },
    {
      id: 3,
      name: "id_resid",
      type: "select",
      options: [...residentName],
      placeholder: "C'est qui le résident ?",
      required: true,
    },
    {
      id: 4,
      name: "id_appart",
      type: "select",
      options: [...appartementNumber],
      placeholder: "N° de l'appartement",
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

export default FormPaieAdd