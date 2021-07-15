import React, { useState, useEffect } from 'react';
import Header from './components/head'
import SearchBar from './components/search'
import Card from './components/card'
import './App.scss';
import mockData from './utils/mock.json'
import logo from './assets/images/BrW201S.png'
function App() {
  const [data] = useState(mockData)
  const [search, setSearch] = useState('')
  const [noResult, setNoResult] = useState(false)
  const onChange = (e) => {
    setSearch(e.target.value)
  }
  const Cards = data.map(item => {
    if (search === '') return <Card img={logo} item={item} key={item.name} />
    if (item.name.includes(search) || item.rocket.includes(search) || item.launchpad.includes(search) || item.locality.includes(search)) {
      return <Card img={logo} item={item} key={item.name} />
    } else { return [] }

  })
  useEffect(() => {
    data.forEach(item => {
      if (!item.name.includes(search) || !item.rocket.includes(search) || !item.launchpad.includes(search) || !item.locality.includes(search)) {
        setNoResult(true)
      }
    })
  }, [search, data])
  return (
    <div className="App">
      <Header />
      <SearchBar onChange={onChange} />
      <div className="container">
        <h4>Space exploration</h4>
        {Cards}
        {noResult ? <span>No results for {search}</span> : ''}
      </div>
    </div>
  );
}

export default App;
