import React, { useState } from 'react'
import {PiMinusLight,GoPlus} from "../../utils/icons_constant"

const Updater = () => {
    const [value, setValue] = useState(1);
    const handleUpdate = (update) => {
        if (update == 0) return;
        setValue(update);
    }
    return (
        <div className='border flex justify-between items-center gap-4 px-4 py-1'>
            <span className='text-lg cursor-pointer' onClick={() => handleUpdate(value - 1)}><PiMinusLight /></span>
            <span className=''>{value}</span>
            <span className='text-lg cursor-pointer' onClick={() => handleUpdate(value + 1)}><GoPlus /></span>
        </div>
    )
}

export default Updater