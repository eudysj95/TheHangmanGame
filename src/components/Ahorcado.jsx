/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {ahorcado} from '../img/images';


export const Ahorcado = ({ahorcadoState}) => {
  
  return (
    <>
          {ahorcadoState === 0 && <img className='h-36 w-40 mx-auto mt-2' src={ahorcado.ahorcado0} alt="img" />}
          {ahorcadoState == 1 && <img className='h-36 w-40 mx-auto mt-2' src={ahorcado.ahorcado1} alt="img" />}
          {ahorcadoState == 2 && <img className='h-36 w-40 mx-auto mt-2' src={ahorcado.ahorcado2} alt="img" />}
          {ahorcadoState == 3 && <img className='h-36 w-40 mx-auto mt-2' src={ahorcado.ahorcado3} alt="img" />}
          {ahorcadoState == 4 && <img className='h-36 w-40 mx-auto mt-2' src={ahorcado.ahorcado4} alt="img" />}
          {ahorcadoState == 5 && <img className='h-36 w-40 mx-auto mt-2' src={ahorcado.ahorcado5} alt="img" />}
          {ahorcadoState == 6 && <img className='h-36 w-40 mx-auto mt-2' src={ahorcado.ahorcado6} alt="img" />}
    </>
  )
}
