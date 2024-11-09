import React from 'react'
import { Link } from 'react-router-dom'

const WarningText = ({ text, btntext, to }) => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <div className='text-gray-400 text-md ' >
                {text}
            </div>
            <div className='pointer underline pl-1 '>
                <Link className='text-md text-[#00BAF2]' to={to}>{btntext}</Link>
            </div>
        </div>

    )
}

export default WarningText
