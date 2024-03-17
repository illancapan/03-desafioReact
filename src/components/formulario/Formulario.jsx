import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Formulario = ({ data, setData = [] }) => {
  const [inputs, setInputs] = useState({
    nombre: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
  });


  useEffect(() => {
    setInputs({
      nombre: "",
      email: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EXPRESIONES REGULARES EMAIL Y TELEFONO
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexTelef = /^[0-9]{9}$/;

    // OBTENER CAMPOS
    const { nombre, email, edad, cargo, telefono } = inputs;

    // VERIFICAR ALGUN CAMPO ESTA VACIO
    if (![nombre, email, edad, cargo, telefono].every((field) => field.trim())) {
      alert("Debes completar todos los campos.");
      return;
    }

    // VERIFICAR SI EL EMAIL TIENE UN FORMATO 
    if (!regexEmail.test(email)) {
      alert("Correo electrónico no válido.");
      return;
    }

    // VERIFICAR SI LA EDAD ES UN NUMERO VALIDO
    const parsedAge = parseInt(edad);
    if (isNaN(parsedAge) || parsedAge <= 0 || parsedAge >= 150) {
      alert("La edad debe ser un número válido.");
      return;
    }

    // VERIFICAR SI EL TELEFONO TIENE UN FORMATO VALIDO
    if (!regexTelef.test(telefono)) {
      alert("El teléfono debe tener 9 dígitos.");
      return;
    }

    // MOSTRAR MENSAJE DE EXITO
    alert("Colaborador agregado exitosamente.");

    // GENERAR NUEVO ID PARA EL COLABORADOR
    const nuevaId = data.length ? (parseInt(data[data.length - 1].id) + 1).toString() : "0";

    // AGREGAR NUEVO COLABORADOR A LOS DATOS
    setData([
      ...data,
      {
        nombre,
        email,
        edad,
        cargo,
        telefono,
        id: nuevaId,
      },
    ]);
  // imprimir los datos
  console.log("Datos almacenados:", {
    nombre,
    email,
    edad,
    cargo,
    telefono,
    id: nuevaId,
  });

    // RESTABLECER VALORES DE LOS CAMPOS DEL FORMULARIO
    setInputs({
      nombre: "",
      email: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2 className="text-center">Agregar colaborador</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del colaborador"
                name="nombre"
                value={inputs.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email del colaborador"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Edad del colaborador"
                name="edad"
                value={inputs.edad}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Cargo del colaborador"
                name="cargo"
                value={inputs.cargo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Teléfono del colaborador"
                name="telefono"
                value={inputs.telefono}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Agregar colaborador
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// VALIDACION DE PROPS
Formulario.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  // setDataFilter: PropTypes.func.isRequired,
  // dataFilter: PropTypes.array.isRequired,
};

export default Formulario;
