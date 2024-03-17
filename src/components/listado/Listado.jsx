// import { useState } from "react"
import PropTypes from "prop-types"
import { BaseColaboradores } from "/src/assets/js/BaseColaboradores"

const Listado = ({ data, setData, dataFilter, setDataFilter }) => {
  const deleteColaborador = (id) => {
    const nuevaData = data.filter((colaborador) => colaborador.id !== id);
    setData(nuevaData);

    const nuevaDataFilter = dataFilter.filter(
      (colaborador) => colaborador.id !== id
    );
    setDataFilter(nuevaDataFilter);
  };

  // definir la lista de colaboradores
  const colaboradores = dataFilter.length ? dataFilter : BaseColaboradores;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <h2 className="text-center">Listado de colaboradores</h2>
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
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Listado.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  dataFilter: PropTypes.array.isRequired,
  setDataFilter: PropTypes.func.isRequired,
};

export default Listado;
