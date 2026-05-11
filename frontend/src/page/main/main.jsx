import React, { useState } from 'react'

import Input from './input'
import Output from './output'
import CodeInput from './codeinput'
import CodeOutput from './codeoutput'
import Navbar from '../navbar/navbar'

import "primereact/resources/themes/lara-light-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

const Main = () => {

  // STATES
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  const [fromLang, setFromLang] = useState("Python")
  const [toLang, setToLang] = useState("JavaScript")

  // CONVERT FUNCTION
  const handleConvert = async () => {

    console.log("BUTTON CLICKED")

    console.log({
      code,
      fromLang,
      toLang
    })

    try {

      const res = await fetch("https://convertit-1max.onrender.com/convert", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          code,
          fromLang,
          toLang
        })

      })

      const data = await res.json()

      console.log(data)

      setOutput(data.output)

    } catch (err) {

      console.error("FRONTEND ERROR:", err)

    }
  }

  return (

    <div className="min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <Navbar/>

      {/* DROPDOWNS */}
      <div className='flex justify-center gap-10'>

        <Input
          fromLang={fromLang}
          setFromLang={setFromLang}
        />

        <Output
          toLang={toLang}
          setToLang={setToLang}
        />

      </div>

      {/* CODE BOXES */}
      <div className='flex justify-center gap-10'>

        <CodeInput
          code={code}
          setCode={setCode}
        />

        <CodeOutput
          output={output}
        />

      </div>

      {/* BUTTON */}
<div className='flex justify-center mt-6'>

  <button
    onClick={handleConvert}
    className='
      px-8 py-3
      rounded-2xl
      bg-amber-500
      text-white
      text-lg
      hover:bg-amber-600
      transition-all duration-300
    '
  >
    Convert
  </button>

</div>

{/* FOOTER */}
<div className='flex justify-center mt-6 '>

<div className='
  fixed
  bottom-4
  right-4
  px-5 py-2
  rounded-xl
  bg-white/10
  backdrop-blur-md
  border border-white/10
  text-white/70
  z-50
  hover:bg-amber-600
  transition-all duration-300
  shadow-lg hover:scale-105
'>

  <p>ConvertIT • v1.0.0 🚀</p>

  <p className='text-white/40'>

Made by{" "}

<a
  href="https://www.linkedin.com/in/raghav-saraswat/"
  target="_blank"
  rel="noopener noreferrer"
  className='
    text-amber-400
    font-semibold
    hover:text-amber-300
    transition-all duration-300
  '
>
  Raghav 

  <i className=" ml-1 pi pi-linkedin text-sm"></i>
</a>

</p>

</div>

</div>

    </div>
  )
}

export default Main