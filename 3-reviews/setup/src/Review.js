import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  }
  const nextPerson = () => {
    let newIndex = index + 1 % people.length;
    return checkIndex(newIndex);
  }
  
  const prevPerson = () => {
    let newIndex = index - 1 % people.length;
    return checkIndex(newIndex);
  }

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    return randomIndex == index ? checkIndex(randomIndex - 1) : randomIndex;
  }
  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{ name }</h4>
    <p className='job'>{ job }</p>
    <p className='info'>{ text }</p>
    <div className="button-container">
      <button className='prev-btn' onClick={() => setIndex(prevPerson)}><FaChevronLeft/></button>
      <button className='next-btn' onClick={() => setIndex(nextPerson)}><FaChevronRight/></button>
    </div>
    <button className='random-btn' onClick={() => setIndex(randomPerson())}>Surprise Me</button>
  </article>;
};

export default Review;
