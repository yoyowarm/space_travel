import React, { useState, useEffect, useRef } from 'react';
import './index.scss'

const Head = () => {
  const header = useRef(null);
  const sticky = header.offsetTop
  const [stickyClass, setStickyClass] = useState(false)

  useEffect(()=> {
    (window.pageYOffset > sticky) ? setStickyClass(true) : setStickyClass(false)
  }, [sticky, setStickyClass])
  return (
    <header className={stickyClass ? 'head stick' : 'head'} ref={header}></header>
  )
}

export default Head