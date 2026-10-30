import React from 'react'
import { experience, education } from '../../utils/Data'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import './experience.css'

const Item = ({ title, place, period, tasks, detail }) => (
  <article className="exp__card">
    <p className="exp__period">{period}</p>
    <h3 className="exp__title">{title}</h3>
    <p className="exp__place">{place}</p>
    {detail && <p className="exp__detail">{detail}</p>}
    {tasks && (
      <ul className="exp__tasks">
        {tasks.map((task, i) => <li key={i}>{task}</li>)}
      </ul>
    )}
  </article>
)

const Experience = () => {
  return (
    <section id='experience' className='experience container'>
      <div className='experience__content grid'>
        <h2>Experiencia y educación</h2>

        <div className="exp__columns">
          <div className="exp__column">
            <h3 className="exp__heading"><FaBriefcase /> Experiencia</h3>
            {experience.map(item => <Item key={item.id} {...item} />)}
          </div>
          <div className="exp__column">
            <h3 className="exp__heading"><FaGraduationCap /> Educación</h3>
            {education.map(item => <Item key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
