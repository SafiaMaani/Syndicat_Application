import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ImageUpdate from '../Assets/images/update.svg'
import axios from 'axios'

function FormUpdateAppart() {

  const navigate = useNavigate()

  const {id} = useParams()
  const [data, setData] = useState({})
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/residents/getResident/${id}`)
    .then((res) => setData(res.data.resident))
  },[])

  const handleChange =(e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:5000/api/residents/update/${id}`, data)
    .then(()=>{
      navigate('/dashboard/residents')
    })
  }

  return (
    <div className='flex'>
      <form className="form-control w-1/2" onSubmit={handleSubmit}>
        <input value={data?.fullName} onChange={handleChange} name='fullName' type="text" placeholder="Nom complet" className="input input-bordered my-4" />
        <input value={data?.cin} onChange={handleChange} name='cin' type="text" placeholder="N° DE CARTE D'INDENTITÉ" className="input input-bordered my-4" />
        <input value={data?.tel} onChange={handleChange} name='tel' type="text" placeholder="N° DE TÉLÉPHONE" className="input input-bordered my-4" />
      <div className="form-control mt-6">
        <button type='submit' className="btn btn-primary">Update</button>
      </div>
      </form>
      <div className='w-1/2 h-1/2'>
        <img src={ImageUpdate} alt='update'/>
      </div>
    </div>
  )
}

export default FormUpdateAppart