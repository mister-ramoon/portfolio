import React, { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import "../Styles/Components/Contact.scss";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const Toast = Swal.mixin({
    customClass: {
      title: "swal-title",
    },
    background: "#212936",
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_tyoo6qp",
      "template_hzc46su",
      toSend,
      "user_II3R7MQVCcVq5PhnQ34ey"
    )
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: "Registro exitoso",
        });
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "Fallo en el registro",
        });
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact__container" id="contacto">
      <h2 className="title">Hablemos</h2>
      <form onSubmit={onSubmit} className="contact__form">
        <label className="contact__label">Nombre</label>
        <input
          type="text"
          name="from_name"
          className="contact__input"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <label className="contact__label">Correo</label>
        <input
          type="text"
          name="reply_to"
          className="contact__input"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <label className="contact__label">Mensaje</label>
        <textarea
          type="text"
          name="message"
          rows="4"
          className="contact__input"
          value={toSend.message}
          onChange={handleChange}
        />
        <input className="contact__btn" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Contact;
