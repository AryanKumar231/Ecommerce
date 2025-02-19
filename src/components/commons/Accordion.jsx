import React, { useState } from 'react'
import { PiMinusLight, GoPlus } from '../../utils/icons_constant';
const Accordion = ({ heading }) => {
    const [accordion, setAccordion] = useState(false);
    return (
        <div className='border-b py-2'>
            <div className='flex justify-between items-center px-2 cursor-pointer' onClick={() => setAccordion(!accordion)}>
                <h3>{heading}</h3>
                <span>{accordion ? <PiMinusLight /> : <GoPlus />}</span>
            </div>
            {
                accordion && <p className='text-sm px-2 my-4 text-neutral-700 font-gara italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsam nisi maxime, sit alias tempore fuga cum iusto quaerat nesciunt hic nostrum quos iure quasi nulla! Cum sint explicabo deleniti, voluptas dolorem nihil natus iure fugiat veniam reiciendis cumque asperiores assumenda illo error ducimus eaque in labore vitae vero autem!</p>
            }
        </div>
    )
}

export default Accordion