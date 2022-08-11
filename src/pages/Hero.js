import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

const Hero = () => {

  const params= useParams()
  const {slug} = params
  const [hero, setHero] = useState([])
  const navigate = useNavigate()
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    fetchHero()
  }, [])

  const fetchHero = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}`)
    const response = await request.json()
    setHero(response)
  }

  const handleDelete = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    const response = await request.json()

    if(request.status === 200){
      navigate('/heroes')
    }
  }

  const handleEdit = () => {
    setEdit(true)
  }

  if(!hero.power){
    return <p>Loading!</p>
  }

  return(
    <>
      {!edit ? (
        <>
          <p>Name: {hero.name}</p>
          <p>Age: {hero.age}</p>
          <p>Color: {hero.color}</p>
          <Link to={`/heroes/${hero.slug}/powers`}>
            <p>Powers</p>
            <ul>
              {hero.power.map(pwr => {
                return <li>{pwr}</li>
              })}
            </ul>
          </Link>
          <button onClick={handleEdit}>Edit Hero</button>
          <button onClick={handleDelete} className='mt-5'>Delete Hero</button>
        </>
      ):(
        <>
          <p>Edit mode</p>
        </>
      )}
    </>
  )
}

export default Hero