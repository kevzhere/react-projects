import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(20);
      console.log(colors);
      setList(colors);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={color} 
            onChange={(e)=>setColor(e.target.value)}
            className={ isError ? 'error' : ''}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => 
            <SingleColor 
              key={index}               
              index={index} 
              hexColor={color.hex}
              {...color}
            />)
        }
      </section>
    </>
  )
}

export default App
