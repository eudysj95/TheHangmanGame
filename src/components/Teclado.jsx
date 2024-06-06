/* eslint-disable no-unused-vars */
import React from 'react'

export const Teclado = () => {

  const enviar = e => {
    e.preventDefault();

    let letra = e.target.value;
    

  }

  return (
    <div className='grid grid-cols-7 gap-1'>

          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="A" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="B" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="C" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="D" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="E" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="F" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="G" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="H" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="I" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="J" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="K" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="L" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="M" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="N" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="Ñ" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="O" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="P" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="Q" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="R" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="S" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="T" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="U" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="V" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="W" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="X" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="Y" onClick={enviar} />
          <input type='submit' className='border-2 border-green-500 h-[2.5rem] w-[2.5rem] rounded-md' value="Z" onClick={enviar} />
          
        </div>
  )
}
