import React from 'react'
import axios from 'axios';

function MangeInsurance() {

const deleteInsuranceDocument = async (e , id ) => {
  console.log(id)
  e.preventDefault();
  await axios.delete( url + `/deleteInsuranceDocument/${id}`).then((res) => {
      console.log(res)
  })
}

  return (
    <div>
      
      
    </div>
  )
}

export default MangeInsurance
