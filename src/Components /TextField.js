import React from 'react'
import { ErrorMessage, useField } from 'formik'

const TextField = ({ label, ...props }) => {
    const [field, metal] = useField(props)
  return (
      <div className='mb-3 flex flex-col '>
          <label htmlFor={field.name}>{label}</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
      <ErrorMessage className= "text-red-400"name={field.name} />
    </div>
  )
}

export default TextField