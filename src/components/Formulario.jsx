import {useState, useEffect} from 'react'
import Error from './Error';


function Formulario({pacientes, setPacientes}) {
  const [nombre, setNombre] = useState('');
  const [nombredueño, setNombredueño] = useState('');
  const [correo, setCorreo] = useState('');
  const [Alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  
  const [error, setError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if([nombre, nombredueño, correo, Alta, sintomas].includes('')) {
      setError(true)
      return;
  }
      setError(false)

    const objetoPacinete = {
      nombre, nombredueño, correo, Alta, sintomas, id: generarId()

    }
      setPacientes([...pacientes, objetoPacinete])

      setNombre('')
      setNombredueño('')
      setCorreo('')
      setAlta('')
      setSintomas('')
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
    <h2 className="font-black text-3xl text-center">Seguimiento del paciente</h2>
    <p className="text-lg mt-5 text-center mb-10">
      Añade pacientes y {''}
      <span className="text-indigo-500 font-bold">Administralos</span>
    </p>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      {error && <Error >Todos los campos son obligatorios</Error>}
      <div className="mb-5">
        <label htmlFor="Mascota" className="block text-gray-700 uppercase font-bold">Nombre de la mascota</label>
        <input id="Mascota" type="text" placeholder="Nombre de la mascota" 
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
        value={nombre} onChange={ (e) => setNombre(e.target.value)}>
        </input>
      </div>

      <div className="mb-5">
        <label htmlFor="Dueño" className="block text-gray-700 uppercase font-bold">Nombre del dueño</label>
        <input id="Dueño" type="text" placeholder="Nombre del dueño" 
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value = {nombredueño} onChange={ (e) => setNombredueño(e.target.value) }>
        </input>
      </div>

      <div className="mb-5">
        <label htmlFor="Correo" className="block text-gray-700 uppercase font-bold">Correo electronico del dueño</label>
        <input id="Correo" type="email" placeholder="Correo electronico del dueño" 
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={correo} onChange={ (e) => setCorreo(e.target.value) }>
        </input>
      </div>

      <div className="mb-5">
        <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
        <input id="Alta" type="date" 
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={Alta} onChange={ (e) => setAlta(e.target.value) }>
        </input>
      </div>

      <div className="mb-5">
        <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas del paciente</label>
        <textarea id="sintomas" placeholder="Describe los sintomas" 
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={sintomas} onChange={ (e) => setSintomas(e.target.value)}  ></textarea>
      </div>

      <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="agregar paciente">
      
      </input>
    </form>
    </div>
    
  )
}

export default Formulario


