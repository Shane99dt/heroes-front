import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Heroes = () => {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetchHeroes()
  }, [])

  const fetchHeroes = async () => {
    const request = await fetch('http://localhost:5000/heroes')
    const response = await request.json()
    setHeroes(response)
  }

  return(
    <>
      <h1>Heroes</h1>
      <section>
        {heroes.map(hero => {
          return <Link to={`/heroes/${hero.slug}`} >{hero.name}</Link>
        })}
      </section>
      <section>
        <Link to={'/heroes/add-hero'} >Add a new hero</Link>
      </section>
    </>
  )
}

export default Heroes