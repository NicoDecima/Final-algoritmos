import {
  FaJava, FaServer, FaNetworkWired, FaVideo, FaBroadcastTower, FaTools,
  FaCar, FaFileWord, FaShieldAlt, FaDatabase, FaWhatsapp, FaGithub
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

export const links = [
  { id: 1, name: 'Sobre mí', section: 'about' },
  { id: 2, name: 'Experiencia', section: 'experience' },
  { id: 3, name: 'Skills', section: 'skills' },
  { id: 4, name: 'Certificaciones', section: 'certificate' },
  { id: 5, name: 'Contacto', section: 'contact' }
]

export const experience = [
  {
    id: 1,
    title: 'Encargado de Telecomunicaciones',
    place: 'Servicio Penitenciario Federal · Marcos Paz',
    period: '2019 - Actualidad',
    tasks: [
      'Sistemas de radiofrecuencia',
      'Administración de telefonía pública y básica',
      'Administración de central telefónica interna',
      'Administración de servidores (dominio-VoIP)',
      'Administración de redes informáticas',
      'Instalación y mantenimiento de dispositivos de seguridad electrónica (CCTV, cercos energizados, Hi-Scan, Body Scan, alarmas y control de acceso)'
    ]
  }
]

export const education = [
  {
    id: 1,
    title: 'Tecnicatura Superior en Análisis de Sistemas',
    place: 'ISFDYT N° 44 · General Heras',
    period: '2024 - Actualidad',
    detail: 'Cursando 3er año'
  },
  {
    id: 2,
    title: 'Bachiller en Ciencias Sociales',
    place: 'Instituto San José · Marcos Paz',
    period: '2009 - 2014',
    detail: ''
  }
]

export const skills = [
  { id: 1, title: 'Paquete Office (avanzado)', icon: <FaFileWord className='skill__icon'/> },
  { id: 2, title: 'MySQL', icon: <GrMysql className='skill__icon'/> },
  { id: 3, title: 'Java', icon: <FaJava className='skill__icon'/> },
  { id: 4, title: 'Mantenimiento y reparación de PC', icon: <FaTools className='skill__icon'/> },
  { id: 5, title: 'Redes informáticas', icon: <FaNetworkWired className='skill__icon'/> },
  { id: 6, title: 'Servidores (dominio-VoIP)', icon: <FaServer className='skill__icon'/> },
  { id: 7, title: 'Telefonía y centrales', icon: <FaPhoneVolume className='skill__icon'/> },
  { id: 8, title: 'Radiofrecuencia', icon: <FaBroadcastTower className='skill__icon'/> },
  { id: 9, title: 'Seguridad electrónica (CCTV, alarmas)', icon: <FaVideo className='skill__icon'/> },
  { id: 10, title: 'Seguridad de la información', icon: <FaShieldAlt className='skill__icon'/> },
  { id: 11, title: 'Bases de datos', icon: <FaDatabase className='skill__icon'/> },
  { id: 12, title: 'Licencia de conducir', icon: <FaCar className='skill__icon'/> },
]

export const certificates = [
  {
    id: 1,
    title: 'Administrador de Data Center de Alta Disponibilidad',
    institution: 'Policía Federal Argentina',
    description: 'Capacitación en infraestructura, administración de servidores, conectividad y seguridad operativa en centros de datos.'
  },
  {
    id: 2,
    title: 'Experto Universitario en Seguridad de la Información',
    institution: 'UTN',
    description: 'Formación en protección de datos, gestión de riesgos, auditorías de seguridad y normas ISO 27001.'
  }
];

export const networks = [
  {
    id: 1,
    path: 'mailto:nicolas.decima17@gmail.com',
    title: 'Enviar un correo electrónico a Nicolás Décima',
    icon: <IoIosMail/>,
  },
  {
    id: 2,
    path: 'tel:+5491136839282',
    title: 'Llamar por teléfono a Nicolás Décima',
    icon: <FaPhoneVolume/>,
  },
  {
    id: 3,
    path: 'https://api.whatsapp.com/send?phone=5491136839282',
    title: 'Enviale un WhatsApp a Nicolás Décima',
    icon: <FaWhatsapp/>,
  },
  {
    id: 4,
    path: 'https://github.com/NicoDecima',
    title: 'Ver el GitHub de Nicolás Décima',
    icon: <FaGithub/>,
  },
]
