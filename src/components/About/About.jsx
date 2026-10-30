import React from "react";
import CV from "../../assets/pdf/CV-Nicolas-Decima.pdf";
import { FaDownload } from "react-icons/fa";
import profile2 from "../../assets/img/profile-2.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="about__content grid">
        <div className="about__info">
          <h2 className="about__title">
            Sobre <span>Mi</span>
          </h2>
          <div className="about__description">
            <p>¡Hola! Soy Nicolás Décima, tengo 30 años y vivo en Buenos Aires, Argentina.</p>
            <p>
              Soy estudiante de 3er año de la Tecnicatura Superior en Análisis de Sistemas (ISFDYT N° 44) y técnico en formación con experiencia en telecomunicaciones, redes informáticas y seguridad electrónica.
            </p>
            <p>
              Desde 2019 me desempeño como Encargado de Telecomunicaciones en el Servicio Penitenciario Federal, donde administro telefonía, servidores, redes y sistemas de radiofrecuencia, además de instalar y mantener dispositivos de seguridad electrónica.            </p>
            <p>Complemento mi formación los siguientes cursos:</p>
            <ul className="about__courses">
              <li>Experto Universitario en Seguridad de la Información (UTN)</li>
              <li>Administrador de Data Center de Alta Disponibilidad (Policía Federal Argentina).</li>
            </ul>
          </div>
          <a href={CV} download="" className="btn">
            Descargar CV
            <span>
              <FaDownload />
            </span>
          </a>
        </div>
        <div className="about__img">
          <div className="border-img">
            <img
              src={profile2}
              alt="img__profile2"
              className="about__profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
