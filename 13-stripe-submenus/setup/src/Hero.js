import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1> HEADING 1!!!</h1>
          <p>
            asdf lkjsadlfkjaslkdjf
            asdfljasldkjf sd fjlkasdjflas
            sadfjlkasdjflk jsalkdfjaldskf
            dsafasdfasdfasdf
            ffzxzxfzf
          </p>
          <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src= { phoneImg } className='phone-img' alt='phone'/>
        </article>
      </div>
    </section>
  )
}

export default Hero
