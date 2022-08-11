import { Link } from "react-router-dom"

const Home = () => {

  return(
    <>
      <h1>Welcome to the Heroes</h1>
      <section>
        <Link to={'/heroes'} >Show Heroes</Link>
      </section>
    </>
  )
}

export default Home