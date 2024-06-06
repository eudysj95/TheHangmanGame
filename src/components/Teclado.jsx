/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const Teclado = ({palabraState}) => {

  let claseOculta = "h-[2.5rem] w-[1.5rem] text-white text-lg text-center rounded-lg font-bold";
  let claseVisible = "h-[2.5rem] w-[1.5rem] text-[#87174D] text-lg text-center rounded-lg font-bold";

  const enviar = e => {
    e.preventDefault();

    let letra = e.target.value;
    let filtradas = palabraState.filter(letraState => {
      return letraState === letra;
    })
    
    console.log(filtradas);
    
    let cambiar = document.getElementsByName(filtradas[0]);
    cambiar.length > 0 && cambiar.forEach(cambio => { cambio.classList.add('text-red-500')})

  }

  return (
    <div className='grid grid-cols-7 gap-2 ml-2'>

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
