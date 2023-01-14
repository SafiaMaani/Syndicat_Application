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
  return (
    <div className="overflow-x-auto">
    <table className="table w-full">
      <thead>
        <tr>
          <th>Nom complet</th>
          <th>N° de Carte d'indentité</th>
          <th>N° de téléphone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => 
          <tr>
            <td>{item.fullName}</td>
            <td>{item.cin}</td>
            <td>{item.tel} </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>  
  )
}

export default Residents