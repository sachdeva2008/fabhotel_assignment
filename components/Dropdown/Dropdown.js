import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({options,selectedVal,dropdownBlurHandler}) => {
  let selectedLi = null
  function handleClick() {
    
  }

    return (
        <div className="dropdown" ref={(elem)=> selectedLi = elem}>
        <a href="#" className="btn btn-primary dropdown-toggle">
          {selectedVal} <i className="icon icon-caret"></i>
        </a>
        
        <ul className="menu" onClick={handleClick} >
          {options.map(({key,label,callback}) => <li key={key}  className="menu-item" onClick={()=>callback && callback(key,label)}><a href="#dropdowns">{label}</a></li>)}
        </ul>
      </div>
    )
}

Dropdown.propTypes = {
  options : PropTypes.array.isRequired
}

export default Dropdown;
