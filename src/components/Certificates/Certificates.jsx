import React from 'react';
import { certificates } from '../../utils/Data';
import { FaCertificate } from 'react-icons/fa';
import './certificates.css';

const Certificates = () => {
    return (
        <section id='certificate' className='certificate container'>
            <h2 className='certificate__title'>Mis certificaciones</h2>
            <div className="certificate__grid">
                {certificates.map(({ id, title, institution, description }) => (
                    <article key={id} className="certificate__card">
                        <FaCertificate className="certificate__icon" />
                        <h3 className="certificate__name">{title}</h3>
                        <p className="certificate__institution">{institution}</p>
                        <p>{description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
