import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MostrarLicor = () => 
{
  const {id} = useParams()
  const [url, setURL] = useState(id)
  const [licor, setLicor] = useState({})

  useEffect(() => 
  {
        const consultarLicor = async() => {
          try 
          {
            const peticion = await fetch(`https://630b133ef280658a59d5986c.mockapi.io/licores/${url}`)
            const respuesta = await peticion.json()
            if(url == respuesta.id)
            {
              setLicor(respuesta)
            }
          } catch (error) 
          {
            console.log(error);
          }
      }
      consultarLicor()
  }, [])
  

  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Detalle del Licor</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>Módulo para mostrar el detall completo de un Licor</p>
      <br />
      {
        Object.keys(licor).length > 0 ?
        (
          <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div class="w-1/3 bg-cover"> <img src="https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2" alt="#" className='rounded-lg ' /></div>

          <div class="w-2/3 p-4 md:p-4">
              <h1 class="text-5xl  text-gray-800 dark:text-white">{licor.nombre}</h1>

              <p class="mt-2 text-1xl text-gray-600 dark:text-gray-400">{licor.tipo}</p>
              <p class="mt-2 text-1xl text-gray-600 dark:text-gray-400">Cantidad: {licor.stock}</p>
              <p class="mt-2 text-1xl text-gray-600 dark:text-gray-400">{licor.descripcion}</p>

              <div class="flex justify-between mt-3 item-center">
                  <h1 class="text-3xl text-gray-700 dark:text-gray-200 md:text-xl">${licor.precio}</h1>
                  <h1 class="text-3xl text-gray-700 dark:text-gray-200 md:text-xl">{licor.porcentaje}% vol.</h1>
              </div>
            </div>
        </div>
        )
        :
        (
          <p className="bg-red-900 border-t border-b border-red-900 text-white px-4 py-3 m-5 text-center rounded-lg">No existe los datos de ese licor</p>
        )
      }
      
    </div>
  )
}

export default MostrarLicor