import React from 'react'
import svg from '../assets/img/background.svg'
//import svg from '../assets/Speedline-50s-1739px.svg'
import '../stylesheets/components/background.css'
export default function Background() {
  return (
    <div className='backgroundimage_container'>
        <img className=''src={svg} alt='background' />
    </div>
  )
}

