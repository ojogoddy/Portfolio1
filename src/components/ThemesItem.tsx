import React from 'react'

const ThemesItem = ({color, img, changeColor}:any) => {
  return <img src={img} alt="" className='theme__img' onClick={()=>{changeColor(color )}} />
  
}

export default ThemesItem