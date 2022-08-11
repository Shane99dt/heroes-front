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
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">

                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-slug">
                  Slug
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-slug" type="text" placeholder="Slug" value={slug} onChange={getSlug} required/>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Name" value={name} onChange={getName} required/>
              </div>
              {/* <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-powers">
                  powers
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-powers" type="text" placeholder="powers" value={powerInput} onChange={getPower} required/>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-color">
                  color
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-color" type="text" placeholder="color" value={color} onChange={getColor} required/>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  Is Alive
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={getIsAlive}>
                    <option value={true} >yes</option>
                    <option value={false} >No</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-age">
                  age
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-age" type="number" placeholder="age" value={age} onChange={getAge} required/>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
                  image link
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="text" placeholder="image link" value={image} onChange={getImage} required/>
              </div> */}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Valid
            </button>
          </form>
        </>
      )}
    </>
  )
}

export default Hero