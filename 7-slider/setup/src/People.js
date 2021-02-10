import React from 'react'

export const People = ({people}) => {
    return (<>
        { people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (<article key={ id }>
        <img src={ image } alt={ name } className='person-img'/>
        <h4>{ name }</h4>
        <p className='title'>{ title }</p>
        <p className="text">{ quote }</p>
        <FaQuoteRight className='icon'/>
        </article>) }
    </>);
}

export default People;