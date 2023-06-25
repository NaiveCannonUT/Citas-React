import React from 'react'

const Paciente = ({paciente}) => {

  const {nombre, nombredueño, correo, Alta, sintomas} = paciente 

  return (
    <div className="m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
      <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre dueño: {''}
      <span className="font-normal normal-case">{nombredueño}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Correo electronico: {''}
      <span className="font-normal normal-case">{correo}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
      <span className="font-normal normal-case">{Alta}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas {''}
      <span className="font-normal normal-case">{sintomas}</span>
    </p>

    
  </div>
  )
}

export default Paciente
