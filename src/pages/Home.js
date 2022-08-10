import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {

  const [heroes, setheroes] = useState([])

  useEffect(() => {
    fetchHeroes()
  }, [])

  const fetchHeroes = async () => {
    const request = await fetch('http://localhost:5000/heroes')
    const response = await request.json()
    setheroes(response)
  }

  return(
    <>
      <h1>Heroes</h1>
      <section>
        {heroes.map(hero => {
          return <p>{hero.name}</p>
        })}
      </section>
    </>
  )
}

export default Home



// const Home = () => {
//   return(
//     <>
//       <p>Home</p>
//     </>
//   )
// }

// export default Home