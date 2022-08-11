import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Hero = () => {

  const params= useParams()
  const {slug} = params
  const [hero, setHero] = useState([])

  useEffect(() => {
    fetchHero()
  }, [])

  const fetchHero = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}`)
    const response = await request.json()
    setHero(response)
  }

  if(!hero.power){
    return <p>Loading!</p>
  }

  return(
    <>
      <p>Name: {hero.name}</p>
      <p>Age: {hero.age}</p>
      <p>Color: {hero.color}</p>
      <ul>
        <p>Power</p>
        {hero.power.map(pwr => {
          return <li>{pwr}</li>
        })}
      </ul>
    </>
  )
}

export default Hero