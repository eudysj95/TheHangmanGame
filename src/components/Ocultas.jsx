/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import palabras from './palabras';


export const Ocultas = React.memo(({palabraState}) => {
  

  return (

    <div className='h-full flex justify-around items-center'>
          
      {palabraState.map(letra =>{ /* 87174D */
        return <input key={Math.random()*100} name={letra} className='h-[2.5rem] w-[1.5rem] text-white text-lg text-center rounded-lg font-bold' type="text" value={letra} readOnly/>
      })}
            
    </div>
  )
})
