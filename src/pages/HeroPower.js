import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const HeroPower = () => {

  const params= useParams()
  const {slug} = params
  const [hero, setHero] = useState([])
  const [newPower, setNewPower] = useState("")
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    fetchHero()
  }, [])

  const fetchHero = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}`)
    const response = await request.json()
    setHero(response)
  }

  const handleEdit = () => {
    setEdit(true)
  }
  const handleValid = () => {
    setEdit(false)
  }

  const deletePower = async (pwr) => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}/power/${pwr}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    const response = await request.json()
    fetchHero()
  }

  const changeNewpower = e => {
    setNewPower(e.target.value)
  }

  const changeNewpowerArr = () => {
    return newPower.split(",")
  }


  const handleAddPower = async (e) => {
    e.preventDefault()

    if(newPower){
      const power = {
        newPower: newPower
      }
      const request = await fetch(`http://localhost:5000/heroes/${slug}/powers`, {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(power)
      })
      const response = await request.json()
      if(request.status === 201){
        fetchHero()
        setNewPower("")
      }else{
        alert(`${request.status} ${request.statusText}`)
      }

    }else{
      alert('Add a power')
    }

  }

  if(!hero.power){
    return <p>Loading!</p>
  }

  return(
    <>
      {!edit ? (
        <>
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white/80 max-w-sm p-5">
              <h5 className="text-gray-900 text-xl font-medium mb-2 capitalize">{hero.name}'s Powers</h5>
              <ul className="mt-4 list-disc pl-5">
                {hero.power.map((pwr) => {
                  return <li key={pwr} className='text-md font-medium mb-2 capitalize'>{pwr}</li>
                })}
              </ul>
              <button className='py-1 px-3 border-2 rounded-md font-medium bg-gray-300 hover:bg-gray-400' onClick={handleEdit}>Edit power</button>
            </div>
          </div>
        </>
      ): (
        <>
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white/80 max-w-sm p-5">
              <ul className="mt-4 list-disc pl-5">
                {hero.power.map((pwr) => {
                  return (
                    <li key={pwr} className='text-md font-medium mb-2 capitalize flex justify-between'>
                      <p>{pwr}</p>
                      <button className='py-1 px-3 border-2 rounded-md font-medium bg-gray-300 hover:bg-gray-400' onClick={()=>{deletePower(pwr)}}>Del</button>
                    </li>
                  )
                })}
              </ul>
              <form onSubmit={handleAddPower}>
                <input onChange={changeNewpower} value={newPower} className="border-2 rounded-md py-1"/>
                <button type="submit" className='py-1 px-3 border-2 rounded-md font-medium bg-gray-300 hover:bg-gray-400'>Add power</button>
              </form>
              <button onClick={handleValid} className='mt-5 mx-auto py-1 px-3 border-2 rounded-md font-medium bg-gray-300 hover:bg-gray-400'>Valid</button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default HeroPower