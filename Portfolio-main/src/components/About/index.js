import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import HarryPotterImage from '../../assets/images/img_main.jpg'
import pdf from '../../assets/pdf/resum.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeout

    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <div className="container about-page" style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",}}>
        <div className="text-zone" style={{position: "static",
    transform: "none"}}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <div className="button">
          <a download href={pdf}>RESUME <FontAwesomeIcon icon={faFileDownload} /></a>
          </div>
        </div>
        <div className='style'>
      <img className='img' src={HarryPotterImage} alt="harry potter" />
    </div>
      </div>
    
  );
      <Loader type="pacman" />
    </>
  )
}

export default About



