const InputWithLabel = ({ label, placeholder, id, type }) => {
    return (
        <div className='flex flex-col w-full'>
            <label htmlFor={id} className='font-semibold mt-4'>{label}</label>
            <input type={type} id={id} placeholder={placeholder} className='border py-2 px-4 mb-2 mt-1 text-sm rounded' />
        </div>
    )
}

export default InputWithLabel;