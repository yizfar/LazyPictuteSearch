import React, { useRef } from 'react';

function PixaInput(props){
  let inputRef = useRef();
  const onSearchClick = () => {
    props.setUserSearch(inputRef.current.value);
  }

  return(
    <nav className='navbar navbar-light bg-light justify-content-center p-4'>
      <div className='d-flex col-md-4'>
        <input ref={inputRef} placeholder='search...' type="search" className='form-control'/>
        <button onClick={onSearchClick} className="btn btn-outline-success">Search</button>
      </div>
    </nav> 
  )
}

export default PixaInput

