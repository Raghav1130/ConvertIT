import React from 'react'
import { Dropdown } from 'primereact/dropdown'

const Output = ({ toLang, setToLang }) => {

  const outputs = [
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
      value={outputs.find(lang => lang.name === toLang)}
      options={outputs}
      optionLabel="name"
      placeholder="Output Language"
      onChange={(e) => setToLang(e.value.name)}
      className="w-full max-w-xs mt-6 md:mt-10"
    />
  )
}

export default Output