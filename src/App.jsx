import { useState } from "react";
import Formulario from "./components/formulario/Formulario";
import Alert from "./components/alert/Alert";
import Listado from "./components/listado/Listado";
import Buscador from "./components/buscador/Buscador";
import { BaseColaboradores } from "./assets/js/BaseColaboradores.js";
import "./index.css";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([]);

  // ALERTAS
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("");

  // // Filtrar colaboradores
  const filtrarColaboradores = (busqueda) => {
    const terminoBusqueda = busqueda.trim().toLowerCase();
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return (
        (colaborador.nombre &&
          colaborador.nombre.toLowerCase().includes(terminoBusqueda)) ||
        (colaborador.email &&
          colaborador.email.toLowerCase().includes(terminoBusqueda)) ||
        (colaborador.edad &&
          colaborador.edad.toString().includes(terminoBusqueda)) ||
        (colaborador.cargo &&
          colaborador.cargo.toLowerCase().includes(terminoBusqueda)) ||
        (colaborador.telefono && colaborador.telefono.includes(terminoBusqueda))
      );
    });
    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  // agregar un nuevo colaborador
  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    mostrarAlerta("Colaborador agregado exitosamente.", "success");
  };

  // mostrar la alerta
  const mostrarAlerta = (mensaje, tipo) => {
    setMensajeAlerta(mensaje);
    setTipoAlerta(tipo);
    setTimeout(() => {
      setMensajeAlerta("");
      setTipoAlerta("");
    }, 10000);
  };

  return (
    <>
      {/* <Buscador
      // colaboradores={colaboradores}
      // setColaboradores={setColaboradores}
      // filtrarColaboradores={filtrarColaboradores}
      /> */}
      <Listado
        colaboradores={colaboradores}
        data={colaboradoresFiltrados}
        setData={setColaboradoresFiltrados}
        dataFilter={colaboradoresFiltrados}
        setDataFilter={setColaboradoresFiltrados}
      />
      <Formulario
        agregarColaborador={agregarColaborador}
        data={colaboradores}
        setData={setColaboradores}
        dataFilter={colaboradores}
        setDataFilter={setColaboradores}
        mostrarAlerta={mostrarAlerta}
      />
      {mensajeAlerta && <Alert type={tipoAlerta} message={mensajeAlerta} />}
    </>
  );
}

export default App;
