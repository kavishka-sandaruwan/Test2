import React from 'react'

const Skills = ({skill}) => {
  return (
    <div className='skills'>
          <h1>Skills</h1>
          <p>This is my skills section</p>
          <p>{skill}</p>
    </div>
  )
}

export default Skills