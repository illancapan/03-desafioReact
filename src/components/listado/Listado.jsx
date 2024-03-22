import { useState } from "react";

function Listado({ data, setData, colaboradores }) {
  // function Listado({ data, setData, colaboradores }) {
  const [filtro, setFiltro] = useState("");

  const handleChange = (e) => {
    // setFiltro(e.target.value);
    setFiltro(e.target.value.toLowerCase());
  };

  // filtrar colaboradores por nombre
  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    if (colaborador && colaborador.nombre) {
      // Agrega esta validacin
      return colaborador.nombre.toLowerCase().includes(filtro);
    }
    return false;
  });

  // const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
  //   if (colaborador && colaborador.nombre) {
  //     return colaborador.nombre.toLowerCase().includes(filtro.toLowerCase());
  //   }
  //   return false;
  // });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <h2 className="text-center">Listado de colaboradores</h2>
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar colaborador por nombre..."
              value={filtro}
              onChange={handleChange}
            />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Edad</th>
                <th>Cargo</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              {colaboradoresFiltrados.map((colaborador) => (
                <tr key={colaborador.id}>
                  <td>{colaborador.nombre}</td>
                  <td>{colaborador.correo}</td>
                  <td>{colaborador.edad}</td>
                  <td>{colaborador.cargo}</td>
                  <td>{colaborador.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Listado;
