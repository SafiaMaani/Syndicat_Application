import { React, useState, useEffect } from 'react'
import axios from 'axios'

function Appartements() {
  const [data, setData] = useState([]);

  const fetchData = ()=>{
    axios.get("http://localhost:9999/api/appartements/getAllAppart")
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
            <th>Numéro</th>
            <th>Chambre</th>
            <th>Prix</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => 
            <tr>
              <td>{item.Number}</td>
              <td>{item.rooms}</td>
              <td>{item.price} DH</td>
              <td>{item.Statut}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>  
  )
}

export default Appartements