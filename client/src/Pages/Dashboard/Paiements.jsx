import { React, useState, useEffect } from 'react'
import axios from 'axios'

function Paiements() {
  const [data, setData] = useState([]);

  const fetchData = ()=>{
    axios.get("http://localhost:9999/api/paiements/getAllPaie")
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
            <th>Appartement</th>
            <th>Resident</th>
            <th>Mois</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => 
            <tr>
              <td>{item.id_appart}</td>
              <td>{item.id_resid}</td>
              <td>{item.mois} DH</td>
              <td>{item.statut}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>  
  )
}

export default Paiements