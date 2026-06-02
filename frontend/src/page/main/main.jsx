import React, { useState } from 'react'

import Input from './input'
import Output from './output'
import CodeInput from './codeinput'
import CodeOutput from './codeoutput'
import Loader from './loader'
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
  const [loading, setLoading] = useState(false)

  // CONVERT FUNCTION
  const handleConvert = async () => {

    // Guard: do nothing if code input is empty
    if (!code.trim()) return

    console.log("BUTTON CLICKED")

    console.log({
      code,
      fromLang,
      toLang
    })

    setLoading(true)

    try {

      const res = await fetch(
        "https://convertit-1max.onrender.com/convert",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            code,
            fromLang,
            toLang
          })
        }
      )

      const data = await res.json()

      console.log(data)

      setOutput(data.output)

    } catch (err) {

      console.error("FRONTEND ERROR:", err)

    } finally {

      setLoading(false)

    }
  }

  return (

    <div className="min-h-screen overflow-hidden px-4 md:px-8 pb-20">

      {/* NAVBAR */}
      <Navbar />

      {/* DROPDOWNS */}
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 mt-2'>

        <Input
          fromLang={fromLang}
          setFromLang={setFromLang}
        />

        <Output
          toLang={toLang}
          setToLang={setToLang}
        />

      </div>

      {/* CODE BOXES — stack vertically on mobile, side by side on md+ */}
      <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-10'>

        <CodeInput
          code={code}
          setCode={setCode}
        />

        {/* OUTPUT SIDE */}
        <div className='relative'>

          {/* OUTPUT BOX ALWAYS STAYS */}
          <CodeOutput
            output={output}
          />

          {/* LOADER OVERLAY */}
          {
            loading && (

              <div
                className='
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/100
                  rounded-xl
                  z-50
                  mt-6
                  md:mt-10
                  h-[45vh]
                  md:h-[60vh]
                '
              >

                <Loader />

              </div>

            )
          }

        </div>

      </div>

      {/* BUTTON */}
      <div className='flex justify-center mt-6'>

        <button
          onClick={handleConvert}
          disabled={loading || !code.trim()}
          className='
            px-8 py-3
            rounded-2xl
            bg-amber-500
            text-white
            text-lg
            hover:bg-amber-600
            transition-all duration-300
            disabled:opacity-50
            disabled:cursor-not-allowed
          '
        >
          {
            loading ? "Converting..." : "Convert"
          }
        </button>

      </div>

      {/* FOOTER */}
      <div className='flex justify-center mt-6 '>

        <div
          className='
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
            text-sm
          '
        >

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

              <i className="ml-1 pi pi-linkedin text-sm"></i>

            </a>

          </p>

        </div>

      </div>

    </div>
  )
}

export default Main