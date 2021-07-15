import React from 'react';
import './index.scss'

const Search = (props) => {
  return (<div className="search">
    <input type="text" placeholder="Date, locality or rocket" onChange={props.onChange}/>
  </div>)
}

export default Search