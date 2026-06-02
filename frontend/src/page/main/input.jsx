import React from 'react'
import { Dropdown } from 'primereact/dropdown'

const Input = ({ fromLang, setFromLang }) => {

  const inputs = [
    { name: 'Python' },
    { name: 'C++' },
    { name: 'C#' },
    { name: 'Java' },
    { name: 'JavaScript' },
    { name: 'Go' },
    { name: 'Rust' },
    { name: 'Kotlin' },
    { name: 'Ruby' }
  ]

  return (
    <Dropdown
      value={inputs.find(lang => lang.name === fromLang)}
      options={inputs}
      optionLabel="name"
      placeholder="Input Language"
      onChange={(e) => setFromLang(e.value.name)}
      className="w-full max-w-xs mt-6 md:mt-10"
    />
  )
}

export default Input