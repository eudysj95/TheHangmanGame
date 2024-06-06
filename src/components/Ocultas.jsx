/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import palabras from './palabras';

export const Ocultas = ({palabraState}) => {
  

  return (

    <div className='h-full flex justify-around items-center'>
          
      {palabraState.map(letra =>{
        return <input key={Math.random()*100} className='h-full w-[2.5rem] text-[#87174D] text-lg text-center rounded-lg font-bold' type="text" value={letra} readOnly/>
      })}
            
    </div>
  )
}
