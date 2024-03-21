import  { useState } from 'react';

// // function Listado() {
function Listado({ data, setData, dataFilter, setDataFilter, colaboradores }) {
  console.log("colaboradores recibidos!!!!!!!!!!",colaboradores)
  const [filtro, setFiltro] = useState('');

  // const handleChange = (e) => {
  //   setFiltro(e.target.value);
  // };

  // filtro a la lista de colaboradores
  const colaboradoresFiltrados = data.filter((colaborador) => {
    if (colaborador && colaborador.nombre) {
      return (
        colaborador.nombre.toLowerCase().includes(filtro.toLowerCase())
      );
    }
    return false;
  });
  
//   const deleteColaborador = (id) => {
//     const nuevaData = data.filter((colaborador) => colaborador.id !== id);
//     setData(nuevaData);

//     const nuevaDataFilter = dataFilter.filter((colaborador) => colaborador.id !== id);
//     setDataFilter(nuevaDataFilter);
//   };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <h2 className="text-center">Listado de colaboradores</h2>
          <div className="mb-3 mt-3">
            {/* <input
              type="text"
              className="form-control"
              placeholder="Buscar colaborador..."
              value={filtro}
              onChange={handleChange}
            /> */}
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
              {/* {colaboradoresFiltrados.map((colaborador, index) => ( */}
              {colaboradores.map((colaborador) => (
                <tr key={colaborador.id}>
                  <td>{colaborador.nombre}</td>
                  <td>{colaborador.correo}</td>
                  <td>{colaborador.edad}</td>
                  <td>{colaborador.cargo}</td>
                  <td>{colaborador.telefono}</td>
                  <td>
                    {/* <button
                      className="btn btn-danger"
                      onClick={() => deleteColaborador(colaborador.id)}
                    >
                      Eliminar
                    </button>  */}
                  </td>
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
