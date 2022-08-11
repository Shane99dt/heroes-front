import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const HeroPower = () => {

  const params= useParams()
  const {slug} = params
  const [hero, setHero] = useState([])
  const [newPower, setNewPower] = useState('')
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
      fetchHero()
      setNewPower("")
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
          <p>{hero.name}'s Powers</p>
          <ul>
            {hero.power.map((pwr, id) => {
              return <li key={id}>{pwr}</li>
            })}
          </ul>
          <button onClick={handleEdit}>Edit power</button>
        </>
      ): (
        <>
          <ul>
            {hero.power.map((pwr, id) => {
              return (
                <>
                  <li key={id}>
                    <article>
                    {pwr}
                    <button className="p-2" onClick={()=>{deletePower(pwr)}}>Del</button>
                    </article>
                  </li>
                </>
              )
            })}
          </ul>
          <form onSubmit={handleAddPower}>
            <input onChange={changeNewpower} value={newPower} className="border-2"/>
            <button type="submit">Add power</button>
          </form>
          <button onClick={handleValid}>Valid</button>
        </>
      )}
    </>
  )
}

export default HeroPower