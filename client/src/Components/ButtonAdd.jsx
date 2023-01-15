import React from 'react'
import { useLocation } from 'react-router-dom'
import FormAppartAdd from './FormAppartAdd';
import FormResidentAdd from './FormResidentAdd'
import FormPaieAdd from './FormPaieAdd'

function ButtonAdd() {
  const location = useLocation();
  const route = location.pathname.split('/')[2]
  
  return (
    <div className='text-black'>
        {/* The button to open modal */}
        <label htmlFor="my-modal" className='btn btn-primary btn-circle'>+</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Veuillez remplir les infos suivantes : </h3>
              {route == "appartements" && <FormAppartAdd />}
              {route == "residents" && <FormResidentAdd />}
              {route == "paiements" && <FormPaieAdd />}
          </div>
        </div>
      
    </div>
  )
}

export default ButtonAdd