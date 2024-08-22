import React, { useEffect } from 'react'
import './Hero.scss'
import { useNavigate } from 'react-router-dom'
import { axiosClient } from '../../utils/axiosClient'

function Hero() {
  const navigate = useNavigate()

  return (
    <div className='hero'>
        <div className="hero-content center">
            <h2 className='heading'>Exclusive Print and Art Work !!</h2>
            <p className='sub-heading'>Exclusive Art Pieces for exclusive you .</p>
            <button onClick={() => navigate('/categories/axaca')} className="cta btn-primary">Explore more</button>
        </div>
    </div>
  )
}

export default Hero