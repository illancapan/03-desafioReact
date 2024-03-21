import { useState } from "react";
import Formulario from "./components/formulario/Formulario";
// import Alert from './components/alert/Alert';
import Listado from './components/listado/Listado';
// import Buscador from './components/buscador/Buscador';
import { BaseColaboradores } from './assets/js/BaseColaboradores.js';
import "./index.css";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(colaboradores);

  // // ALERTAS
  // const [mensajeAlerta, setMensajeAlerta] = useState("");
  // const [tipoAlerta, setTipoAlerta] = useState("");

  //  filtrar colaboradores
  const filtrarColaboradores = (busqueda) => {
    const terminoBusqueda = busqueda.trim().toLowerCase();
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(terminoBusqueda) ||
        colaborador.email.toLowerCase().includes(terminoBusqueda) ||
        colaborador.edad.toString().includes(terminoBusqueda) ||
        colaborador.cargo.toLowerCase().includes(terminoBusqueda) ||
        colaborador.telefono.includes(terminoBusqueda)
      );
    });
    // actualizar el estado de colaboradoresFiltrados con el nuevo array filtrado
    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  // Filtrar colaboradores
  // const filtrarColaboradores = (busqueda) => {
  //   const terminoBusqueda = busqueda.trim().toLowerCase();
  //   const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
  //     return (
  //       colaborador.nombre && colaborador.nombre.toLowerCase().includes(terminoBusqueda) ||
  //       colaborador.correo && colaborador.correo.toLowerCase().includes(terminoBusqueda) ||
  //       colaborador.edad && colaborador.edad.toString().includes(terminoBusqueda) ||
  //       colaborador.cargo && colaborador.cargo.toLowerCase().includes(terminoBusqueda) ||
  //       colaborador.telefono && colaborador.telefono.includes(terminoBusqueda)
  //     );
  //   });
  //   return colaboradoresFiltrados;
  // };

  // Agregar un nuevo colaborador
  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    console.log("Colaborador agregado exitosamente. Al finn!");
    // mostrarAlerta("Colaborador agregado exitosamente.", "success");
    console.log(nuevoColaborador)
  };

  // // Mostrar una alerta
  // const mostrarAlerta = (mensaje, tipo) => {
  //   setMensajeAlerta(mensaje);
  //   setTipoAlerta(tipo);
  //   setTimeout(() => {
  //     setMensajeAlerta("");
  //     setTipoAlerta("");
  //   },2000);
  // };

  return (
    <>
      {/* //  <Buscador filtrarColaboradores={filtrarColaboradores} />  */}
      <Listado 
      colaboradores={colaboradores}
        data={colaboradoresFiltrados}
        setData={setColaboradoresFiltrados}
        dataFilter={colaboradoresFiltrados}
        setDataFilter={setColaboradoresFiltrados}
        />
      
        <Formulario
        agregarColaborador={agregarColaborador}
        // // alert={agregarAlert}
        data={colaboradores}
        setData={setColaboradores}
        dataFilter={colaboradores}
        setDataFilter={setColaboradores}
      />
      {/* {mensajeAlerta && <Alert type={tipoAlerta} message={mensajeAlerta} />} */}
    </>
  );
}

export default App;