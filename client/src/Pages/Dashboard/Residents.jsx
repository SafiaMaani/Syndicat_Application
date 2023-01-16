import { React, useState, useEffect } from 'react'
import axios from 'axios'

function Residents() {
  const [data, setData] = useState([]);

  const fetchData = ()=>{
    axios.get("http://localhost:9999/api/residents/getAllResident")
    .then((res) =>{
      setData(res.data.result)
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(()=> {
    fetchData()
  },[])

  const deleteAppartement = (id)=>{
    axios.delete("http://localhost:9999/api/residents/delete/"+id)
    .then((res)=> fetchData())
  }

  return (
    <div className="overflow-x-auto">
    <table className="table w-full">
      <thead>
        <tr>
          <th>Nom complet</th>
          <th>N° de Carte d'indentité</th>
          <th>N° de téléphone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => 
          <tr>
            <td>{item.fullName}</td>
            <td>{item.cin}</td>
            <td>{item.tel} </td>
            <td><button className="btn btn-outline btn-error" onClick={() => deleteAppartement(item._id)}>Delete</button></td>
          </tr>
        )}
      </tbody>
    </table>
  </div>  
  )
}

export default Residents