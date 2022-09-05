import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
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
    const request = await fetch(`https://heroes-backend-dushen.herokuapp.com/heroes/${slug}`)
    const response = await request.json()
    setHero(response)
  }

  const handleDelete = async () => {
    const request = await fetch(`https://heroes-backend-dushen.herokuapp.com/heroes/${slug}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })

    if(request.status === 204){
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