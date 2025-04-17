import React, { useState } from 'react'
import courses from './data';

const Course = () => {
    const [index, setIndex] = useState(1);
    const {info ,name,image, price } = courses[index];
    const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-course'>
        <div className='img'>
            <img src={image} alt={name}/>
        </div>
        <footer>
            <div className='course-info'>
                <h4>{name}</h4>
                <h4 className='course-price'>${price}</h4>
            </div>
            <p>
                {
                    readMore ? info : `${info.slice(0,100)}...`
                }
                <button onClick={() => setReadMore(!readMore)}>
                {
                    readMore ? (
                        <i class="em em-point_left" aria-role="presentation" aria-label="WHITE LEFT POINTING BACKHAND INDEX"></i>
                    ) : (
                        <i class="em em-point_right" aria-role="presentation" aria-label="WHITE RIGHT POINTING BACKHAND INDEX"></i>
                    )
                }
                </button>
            </p>
          
        </footer>
    </article>
  )
}

export default Course