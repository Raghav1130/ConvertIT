import React from 'react'
import { Dropdown } from 'primereact/dropdown'

const Output = ({ toLang, setToLang }) => {

  const outputs = [
    { name: 'Python' },
    { name: 'C++' },
    { name: 'C#' },
    { name: 'Java' },
    { name: 'JavaScript' }
  ]

  return (
    <Dropdown
      value={outputs.find(lang => lang.name === toLang)}
      options={outputs}
      optionLabel="name"
      placeholder="Output Language"
      onChange={(e) => setToLang(e.value.name)}
      className="w-64 mt-10"
    />
  )
}

export default Output