import React from 'react'
import { useState } from 'react'

const ColorCard = () => {
    const [color, setColor] = useState("olive")
    return (
        <div>
            <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
                <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>
                            Red
                        </button>
                        <button className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>
                            Green
                        </button>
                        <button className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>
                            Blue
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ColorCard
