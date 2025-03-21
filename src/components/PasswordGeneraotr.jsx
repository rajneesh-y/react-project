import React from 'react'
import { useState, useCallback,useEffect,useRef } from 'react'
const PasswordGeneraotr = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "012345678"
        if (charAllowed) str += "!@#$%^&*=_+=[]{}~}"



        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordClibboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 3)
        window.navigator.clipboard.writeText(password)
    })

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])


    return (
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-20 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3 mb-5' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 mb-5' onClick={copyPasswordClibboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursro-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id="numberInput" value={length} className='cursro-pointer' onChange={() => { setNumberAllowed((prev)=>!prev) }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charAllowed} id="characterInput" value={length} className='cursro-pointer' onChange={() => { setCharAllowed((prev)=>!prev) }} />
            <label htmlFor='characterInput'>Character</label>
          </div>


        </div>
      </div>
    )
}

export default PasswordGeneraotr
