import React , {useState} from 'react'


import './FormRow.css';


const FormRow = ({type,name,value,handleChange,labelText,hoverText,isPro}) => {

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className='form-row' >
        
        
          <label htmlFor={name} className='form-label' onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} >
            {labelText || name}
            {/* {!isPro && 
            isHovering && <div className='hoverText'>{hoverText}</div> } */}
          </label>

         <input
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            className='input'
        />
    </div>
  )
}
export default FormRow;