/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'

// eslint-disable-next-line react/display-name
export const Teclado = ({palabraState, ahorcadoState, setAhorcadoState, contadorAhorcado, setContadorAhorcado, setRellenarState}) => {

  const [completado, setCompletado] = useState(1);
 

  const enviar = e => {
    e.preventDefault();
    

    let letra = e.target.value;
    let filtradas = palabraState.filter(letraState => {
      return letraState === letra;
    })

    if(filtradas.length > 0){
      let cambiar = document.getElementsByName(filtradas[0]);
      cambiar.forEach(cambio => { cambio.classList.replace('text-white', 'text-red-700')})
      console.log(cambiar)
      setCompletado(completado+filtradas.length);
    }else{
      setAhorcadoState(ahorcadoState+1);
      setContadorAhorcado(contadorAhorcado + 1);
    }
    if(contadorAhorcado >= 5) {
      alert("Has perdido!!")
      setAhorcadoState(0);
      setContadorAhorcado(0);
      setRellenarState(1);
    }
    if(palabraState.length == completado){
      alert("Has Ganado!!")
      setAhorcadoState(0);
      setContadorAhorcado(0);
      setRellenarState(1);
      setCompletado(1);
    }

    

  }

  return (
    <div className='grid grid-cols-6 gap-2 ml-2'>

          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="A" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="B" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="C" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="D" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="E" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="F" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="G" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="H" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="I" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="J" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="K" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="L" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="M" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="N" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="Ñ" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="O" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="P" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="Q" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="R" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="S" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="T" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="U" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="V" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="W" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="X" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="Y" onClick={enviar} />
          <input type='submit' className='bg-[#87174D] hover:bg-[#77175D] text-white h-[2.5rem] w-[2.5rem] rounded-md' value="Z" onClick={enviar} />
          
        </div>
  )
}
