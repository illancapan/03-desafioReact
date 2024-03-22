import { useState } from "react";

function Buscador({ filtrarColaboradores }) {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    const valorBusqueda = e.target.value.toLowerCase();
    setBusqueda(valorBusqueda);
    filtrarColaboradores(valorBusqueda); // llama a la funcion de filtrado
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar colaborador..."
          value={busqueda}
          onChange={handleChange}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default Buscador;