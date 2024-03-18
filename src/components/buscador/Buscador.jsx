// import { useState } from 'react';

// function Buscador({ filtrarColaboradores }) {
//   const [busqueda, setBusqueda] = useState('');

//   const handleChange = (e) => {
//     setBusqueda(e.target.value);
//     filtrarColaboradores(e.target.value)
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     filtrarColaboradores(busqueda);
//   };

//   return (
//     <>
//     <div className="container">
//     <form onSubmit={handleSubmit}>
//       <div className="input-group mb-3 mt-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Buscar colaborador..."
//           value={busqueda}
//           onChange={handleChange}
//         />
//         {busqueda && (
//           <button className="btn btn-outline-secondary" type="submit">
//             Buscar
//           </button>
//         )}
//       </div>
//     </form>
//     </div>
//     </>
//   );
// }

// export default Buscador;



// // // // // // // import { useState } from 'react';

// // // // // // // function Buscador({ filtrarColaboradores }) {
// // // // // // //   const [busqueda, setBusqueda] = useState('');

// // // // // // //   const handleChange = (e) => {
// // // // // // //     setBusqueda(e.target.value);
// // // // // // //   };

// // // // // // //   const handleSubmit = (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     filtrarColaboradores(busqueda);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <form onSubmit={handleSubmit}>
// // // // // // //       <div className="input-group mb-3 mt-3">
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           className="form-control"
// // // // // // //           placeholder="Buscar colaborador..."
// // // // // // //           value={busqueda}
// // // // // // //           onChange={handleChange}
// // // // // // //         />
// // // // // // //         <button className="btn btn-outline-secondary" type="submit">
// // // // // // //           Buscar
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </form>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Buscador;







// // // // // // // // import { useState } from 'react';

// // // // // // // // function Buscador({ colaboradores, setColaboradores }) {
// // // // // // // //   const [busqueda, setBusqueda] = useState('');

// // // // // // // //   const handleChange = (e) => {
// // // // // // // //     setBusqueda(e.target.value);
// // // // // // // //   };

// // // // // // // //   const buscarColaboradores = () => {
// // // // // // // //     const terminoBusqueda = busqueda.trim().toLowerCase();
// // // // // // // //     const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
// // // // // // // //       return (
// // // // // // // //         colaborador.nombre.toLowerCase().includes(terminoBusqueda) ||
// // // // // // // //         colaborador.correo.toLowerCase().includes(terminoBusqueda) ||
// // // // // // // //         colaborador.edad.toString().includes(terminoBusqueda) ||
// // // // // // // //         colaborador.cargo.toLowerCase().includes(terminoBusqueda) ||
// // // // // // // //         colaborador.telefono.includes(terminoBusqueda)
// // // // // // // //       );
// // // // // // // //     });
// // // // // // // //     setColaboradores(colaboradoresFiltrados);
// // // // // // // //   };

// // // // // // // //   const handleSubmit = (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     buscarColaboradores();
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <form onSubmit={handleSubmit}>
// // // // // // // //       <div className="input-group mb-3 mt-3">
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           className="form-control"
// // // // // // // //           placeholder="Buscar colaborador..."
// // // // // // // //           value={busqueda}
// // // // // // // //           onChange={handleChange}
// // // // // // // //         />
// // // // // // // //         <button className="btn btn-outline-secondary" type="submit">
// // // // // // // //           Buscar
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </form>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default Buscador;
