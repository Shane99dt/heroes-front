import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddHero = () => {
  const [name, setName] = useState('')
  const [powerInput, setPowerInput] = useState('')
  const [power, setPower] = useState([])
  const [color, setColor] = useState('')
  const [isAlive, setIsAlive] = useState(true)
  const [age, setAge] = useState(0)
  const [image, setImage] = useState('')
  const navigate = useNavigate()



  const getName = e => {
    setName(e.target.value)
  }
  const getPower = e => {
    setPowerInput(e.target.value)
  }
  const getColor = e => {
    setColor(e.target.value)
  }
  const getIsAlive = e => {
    setIsAlive(e.target.value)
  }
  const getAge = e => {
    setAge(e.target.value)
  }
  const getImage = e => {
    setImage(e.target.value)
  }

  const updatePower = () => {
    return powerInput.split(',')
  }




  const handleSubmit = async (e) => {
    e.preventDefault()

    const hero = {
      name : name,
      power : updatePower(),
      color : color,
      isAlive : isAlive,
      age : age,
      image : image
    }

    const request = await fetch("http://localhost:5000/heroes", {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(hero)
    })
    const response = await request.json()

    console.log('submitted')
    if(request.status === 201){
      navigate('/heroes')
    }else{
      alert(`${request.status} ${request.statusText}`)
    }
  }


  return(
    <>
      <section className="flex justify-center items-center">
        <form className="w-full mt-3 max-w-lg bg-slate-400/20 border-2 border-2 rounded-lg p-4 justify-center flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-300 shadow-gray-500 shadow-inner text-xs font-bold mb-2" htmlFor="grid-name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-3" id="grid-name" type="text" placeholder="Name" value={name} onChange={getName} required/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-300 shadow-gray-500 shadow-inner text-xs font-bold mb-2" htmlFor="grid-powers">
                powers
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-3" id="grid-powers" type="text" placeholder="powers" value={powerInput} onChange={getPower} required/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-300 shadow-gray-500 shadow-inner text-xs font-bold mb-2" htmlFor="grid-color">
                color
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-3" id="grid-color" type="text" placeholder="color" value={color} onChange={getColor} required/>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-300 shadow-gray-500 shadow-inner text-xs font-bold mb-2" htmlFor="grid-state">
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
              <label className="block uppercase tracking-wide text-gray-300 shadow-gray-500 shadow-inner text-xs font-bold mb-2" htmlFor="grid-age">
                age
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-age" type="number" placeholder="age" value={age} onChange={getAge} required/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-300 shadow-gray-500 shadow-inner text-xs font-bold mb-2" htmlFor="grid-image">
                image link
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="text" placeholder="image link" value={image} onChange={getImage} required/>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add hero
          </button>
        </form>
      </section>
    </>
  )
}

export default AddHero