import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import FormHero from "../components/FormHero"
import HeroBigCard from "../components/HeroBigCard"

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
          <section className="md:mt-10">
            <HeroBigCard hero={hero} handleEdit={handleEdit} handleDelete={handleDelete}/>
          </section>
        </>
      ):(
        <>
          <FormHero btnSubmitText={"Valid hero"} fetchSlug={hero.slug} infoHero={hero} />
        </>
      )}
    </>
  )
}

export default Hero