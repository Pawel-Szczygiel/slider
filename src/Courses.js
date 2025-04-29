import React, { useState, useEffect} from 'react'
import Course from './Course';

const LIGHT_THEME = 'light-theme';
const DARK_THEME = 'dark-theme';

const getStorageTheme = () => {
  let theme = LIGHT_THEME;
  localStorage.getItem('theme') && ( theme = localStorage.getItem('theme')) ;
  
  return theme;
}


const Courses = () => {
  const [theme, setTheme] = useState(getStorageTheme);

  const switchMode = () => {
    theme === LIGHT_THEME ? setTheme(DARK_THEME) : setTheme(LIGHT_THEME); 
  }

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <section>
    <button className='btn change-mode' onClick={switchMode}>
      {theme === LIGHT_THEME ? 'dark' : 'light'}
    </button>
    <div className='title'>
         <h2>our courses</h2>
         <div className='underline'></div>
     </div>
     <div>
        <Course />
     </div>
 </section>
  )
}

export default Courses