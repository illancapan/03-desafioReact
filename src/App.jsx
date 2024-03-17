import { useState } from "react";
import Formulario from "./components/formulario/Formulario";
import Alert from "./components/alert/Alert";
import Listado from "./components/listado/Listado";
import { BaseColaboradores } from "./assets/js/BaseColaboradores.js";
import "./index.css";

function App() {
  const [data, setData] = useState([BaseColaboradores]);
  const [dataFilter, setDataFilter] = useState([]);

  const agregarAlert = (mensaje) => {
// LOGICA AGREGAR ALERTT
    alert(mensaje);
  };

  return (
    <>
      <Listado
        data={data}
        setData={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
      />

      <Formulario
        alert={agregarAlert}
        data={data}
        setData={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
      />

      {/* <Listado /> */}

      <Alert />
    </>
  );
}

export default App;
