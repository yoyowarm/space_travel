import React, { useState, useEffect } from 'react';
import './index.scss'

const Head = () => {
  const [stickyClass, setStickyClass] = useState(false)

  useEffect(()=> {
    const handleScroll = () => {
      (window.pageYOffset > 150) ? setStickyClass(true) : setStickyClass(false)
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setStickyClass])
  return (
    <header className={stickyClass ? 'head stick' : 'head'}>
      <div className="website">Space Travel</div>
      <button className="login">Login</button>
    </header>
  )
}

export default Head