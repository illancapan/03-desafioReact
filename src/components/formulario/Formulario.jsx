import { useState, useEffect } from "react";
// import Alert from "../alert/Alert";

const Formulario = ({ data, setData, agregarColaborador }) => {
  const [inputs, setInputs] = useState({
    nombre: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  // const [mensajeAlerta, setMensajeAlerta] = useState(""); // Estado para manejar los mensajes
  // const [tipoAlerta, setTipoAlerta] = useState(""); // Estado para manejar el tipo de mensaje
  // // const nuevaId = data.length
  // //   ? (parseInt(data[data.length - 1].id) + 1).toString()
  // //   : "0";

  useEffect(() => {
    setInputs({
      nombre: "",
      email: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    console.log(data)
  }, [data]);

  const handleChange = (e) => {
    const { name, value } =e.target;
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
    if (
      ![nombre, email, edad, cargo, telefono].every((field) => field.trim())
    ) {
      console.log("Debes completar todos los campos.");
      //   setMensajeAlerta("Debes completar todos los campos.");
      // setTipoAlerta("error");
      return;
    }
    console.log("Valores de los campos:", nombre, email, edad, cargo, telefono);

    // VERIFICAR SI EL EMAIL TIENE UN FORMATO
    if (!regexEmail.test(email)) {
      console.log("el Correo no es valido mejoralo!");
      // setMensajeAlerta("Correo electrónico no válido.");
      // setTipoAlerta("error");
      return;
    }

    // VERIFICAR SI LA EDAD ES UN NUMERO VALIDO
    const parsedAge = parseInt(edad);
    if (isNaN(parsedAge) || parsedAge <= 0 || parsedAge >= 100) {
      console.log("La edad debe ser un número válido.");
      // setMensajeAlerta("La edad debe ser un número válido.");
      // setTipoAlerta("error");
      return;
    }
    // VERIFICAR SI EL TELEFONO TIENE UN FORMATO VALIDO
    if (!regexTelef.test(telefono)) {
      console.log("El teléfono debe tener 9 dígitos.!!!!!!");
      //     setMensajeAlerta("El teléfono debe tener 9 dígitos.");
      //     setTipoAlerta("error");
      return;
    }
    //   // MOSTRAR MENSAJE DE EXITO
    //   setMensajeAlerta("Colaborador agregado exitosamente.");
    //   setTipoAlerta("success");

    // // GENERAR NUEVO ID PARA EL COLABORADOR
    // // Verifica si data es un array
    // if (Array.isArray(data)) {
    //   data.length ? (parseInt(data[data.length - 1].id) + 1).toString() : "0";
    // } else {
    //   // Manejo de caso donde data no es un array
    //   console.error("El valor de data no es un array:", data);
    // }

    //   // const nuevaId = data.length ? (parseInt(data[data.length - 1].id) + 1).toString() : "0";

    // AGREGAR NUEVO COLABORADOR A LOS DATOS
    setData([
      ...data,
      {
        nombre,
        email,
        edad,
        cargo,
        telefono,
        // id: nuevaId,
      },
    ]);

      // llama funcionn agregarColaborador pasando el nuevo colaborador
      agregarColaborador({
        nombre,
        email,
        edad,
        cargo,
        telefono,
        // id: nuevaId,
      });
      // agregarColaborador(inputs);

      // RESTABLECER VALORES DE LOS CAMPOS DEL FORMULARIO
      setInputs({
        nombre: "",
        email: "",
        edad: "",
        cargo: "",
        telefono: "",
      });

      console.log("datis desoyes de agregar", data)
    // console.log("Datos del colaborador agregado:", {
    //   nombre,
    //   email,
    //   edad,
    //   cargo,
    //   telefono,
    //   // id: nuevaId,
    // });
  };

  // useEffect(() => {
  //   if (mensajeAlerta) {
  //     const timeout = setTimeout(() => {
  //       setMensajeAlerta("");
  //       setTipoAlerta("");
  //     }, 4000); // 4 segundos no espera este tiempo de carga
  //     return () => clearTimeout(timeout);
  //  }
  // }, [mensajeAlerta]);

  return (
    <>
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
                  type="tel"
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
              {/* {mensaje && <Alert type={tipoMensaje} message={mensaje} />} */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// VALIDACION DE PROPS
// Formulario.propTypes = {
//   data: PropTypes.array.isRequired,
//   setData: PropTypes.func.isRequired,
//   agregarColaborador: PropTypes.func.isRequired,
// };

export default Formulario;