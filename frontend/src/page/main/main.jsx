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
          className='px-8 py-3 rounded-2xl bg-amber-500 text-white text-lg hover:bg-amber-600'
        >
          Convert
        </button>

        <div className='flex justify-center mt-6 mb-4'>

        <div className='
          px-6 py-3
          rounded-2xl
          bg-white/10
          backdrop-blur-md
          border border-white/10
          text-center
          text-white/80
        '>

          <p className='text-sm font-medium'>
            ConvertIT • Version 1.0 🚀
          </p>

          <p className='text-xs mt-1 text-white/50'>
            Made by Raghav
          </p>

        </div>

      </div>

      </div>

    </div>
  )
}

export default Main