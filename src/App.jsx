/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { Ahorcado } from "./components/Ahorcado";
import { Teclado } from "./components/Teclado";
import { Ocultas } from "./components/Ocultas";
import palabras from "./components/palabras";

function App() {

  const [palabraState, setPalabraState] = useState([]);

  useEffect(() => {
      rellenar(palabras);
  },[])

  const rellenar = (palabras) => {

    let aleatorio = Math.trunc(Math.random() * 10);
    let palabra = palabras[aleatorio].toUpperCase();
    let array = palabra.split('');
    setPalabraState(array);

  }

  return (
    <div className="bg-[#73C7E4] flex min-h-screen justify-center items-center">
      <div className="bg-[#FFEEF1] p-2 min-h-[30rem] min-w-[28rem] rounded-lg">
        <div className="bg-[#E0D1D4] h-60 flex flex-col justify-between p-2">
          <div className="w-full h-44 border-2 border-blue-500">
            <Ahorcado />
          </div>

          <div className="w-full h-16 mt-2">
            <Ocultas palabraState={palabraState}/>
          </div>
        </div>

        <div className="h-56 mt-4">
          <Teclado palabraState={palabraState}/>
        </div>
      </div>
    </div>
  );
}

export default App;
