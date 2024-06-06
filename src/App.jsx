/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Ahorcado } from "./components/Ahorcado";
import { Teclado } from "./components/Teclado";
import { Ocultas } from "./components/Ocultas";

function App() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="p-2 border-2 border-black h-[30rem] w-[22rem]">
        <div className="h-56 border-2 border-red-500 flex flex-col justify-between p-2">
          <div className="w-full h-36 border-2 border-blue-500">
            <Ahorcado />
          </div>

          <div className="border-2 border-blue-500 w-full h-12">
            <Ocultas/>
          </div>
        </div>

        <div className="border-2 border-red-500 h-56 mt-4">
          <Teclado />
        </div>
      </div>
    </div>
  );
}

export default App;
