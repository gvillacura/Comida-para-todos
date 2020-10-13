import React, { useState, useEffect } from "react";
import "./formModal.css";

const FormModal = (props) => {
  const [disabledButton, setDisabledButton] = useState(true);

  const [data, setData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    donacion: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(data);
    if (
      data.nombre !== "" &&
      data.correo !== "" &&
      data.telefono !== "" &&
      data.donacion !== ""
    ) {
      console.log("OK");
      setDisabledButton(false);
    } else {
      console.log("debe rellenar datos");
      setDisabledButton(true);
    }
  }, [data]);

  return (
    <div className="modal-items">
      <h2>¡Hola!</h2>
      <h4 className="text-modal">
        Estamos muy felices de que quieras colaborar.
        Por favor, llena la solicitud y te contestaremos a la brevedad posible.
      </h4>
      <form>
        <p>Nombre y Apellido</p>
        <input type="text" name="nombre" onChange={handleInputChange} />
        <p>Correo</p>
        <input type="email" name="correo" onChange={handleInputChange} />
        <p>Teléfono</p>
        <input type="number" name="telefono" onChange={handleInputChange} />
        <p>Cuéntanos tu tipo de donación</p>
        <input
          className="donation-type"
          type="text"
          name="donacion"
          onChange={handleInputChange}
        />
      </form>
      <div className="send-btn">
        <button type="submit" onClick={props.open} disabled={disabledButton}>
          ENVIAR
        </button>
      </div>
    </div>
  );
};

export default FormModal;
