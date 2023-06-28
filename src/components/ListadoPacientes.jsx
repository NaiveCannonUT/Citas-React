import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({pacientes}) {



  return (
  <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">

    {pacientes && pacientes.length ? (
<div>
<h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
      Adimistra tus {''}
      <span className="text-indigo-500 font-bold">Pacientes y citas</span>
    </p>

    {pacientes.map( (paciente) => (
      <Paciente key={paciente.id} paciente ={paciente} setPaciente= {setPaciente}></Paciente>
    ))}
</div>
    ): (
      <div>
          <h2 className="font-black text-3xl text-center">Aun no hay pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
      prueba a agregar un paciente {''}
      <span className="text-indigo-500 font-bold">y estos apareceran aqui</span>
    </p>

      </div>
    )}
      

  </div>
  
    
  )
}

export default ListadoPacientes
