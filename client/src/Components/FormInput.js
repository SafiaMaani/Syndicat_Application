import { React } from 'react';

function FormInput(props){
  const { onChange, ...inputProps } = props;

  return (
    <div>
      <div className="mb-2">
        {!Object.values(inputProps).includes("select") &&
        <input
        {...inputProps}
        onChange={onChange}
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        }
        {Object.values(inputProps).includes("select") && 
          <select className="select select-primary w-full max-w-xs" onChange={onChange} name={inputProps.name}>
            <option disabled selected>{inputProps.placeholder}</option>
            {inputProps.options?.map((option)=>
              <option value={option.value}>
                {option.name}
              </option>
            )}  
          </select>
        }
      </div>
    </div>
  )
}
export default FormInput