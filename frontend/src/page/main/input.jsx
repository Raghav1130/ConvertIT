import React from 'react'
import { Dropdown } from 'primereact/dropdown'

const Input = ({ fromLang, setFromLang }) => {

  const inputs = [
    { name: 'Python' },
    { name: 'C++' },
    { name: 'C#' },
    { name: 'Java' },
    { name: 'JavaScript' }
  ]

  return (
    <Dropdown
      value={inputs.find(lang => lang.name === fromLang)}
      options={inputs}
      optionLabel="name"
      placeholder="Input Language"
      onChange={(e) => setFromLang(e.value.name)}
      className="w-64 mt-10"
    />
  )
}

export default Input