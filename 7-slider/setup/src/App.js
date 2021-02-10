import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import People from './People.js';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  },[index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index])
  
  return <section className="section">
    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className="section-center">
      <People people={ people } index={ index }/>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft/>
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight/>
      </button>
    </div>
  </section>
}

export default App;
