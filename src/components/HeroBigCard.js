import { Link } from "react-router-dom"

const HeroBigCard = (props) => {

  const { slug, name, image, age, color, isAlive, power } = props.hero
  const { handleDelete, handleEdit } = props

  return(
    <>
      <div className="flex justify-center">
        {/* <Link to={`/heroes/${slug}`}> */}
          <div className="rounded-lg shadow-lg bg-white/70 max-w-sm">
            <img className="rounded-t-lg" src={image} alt={`${name} image`}/>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 capitalize">Name: {name}</h5>
              <h5 className="text-gray-900 text-xl font-medium mb-2 capitalize">Age: {age}</h5>
              <h5 className="text-gray-900 text-xl font-medium mb-2 capitalize">Color: {color}</h5>
              <h5 className="text-gray-900 text-xl font-medium mb-2 capitalize">Alive: {isAlive ? ('Yes') : ('No')}</h5>
              <div className="flex flex-row items-center gap-5">
                <h5 className="text-gray-900 text-xl font-medium mb-2 capitalize">Powers</h5>
                <Link to={`/heroes/${slug}/powers`}><small>Edit</small></Link>
              </div>
              <ul className="text-gray-900 text-xl font-medium mb-2 capitalize list-disc ml-5">
                {power.map((pwr, i) => {
                  return <li key={i}>{pwr}</li>
                })}
              </ul>
            </div>
            <div className="flex flex-row py-3 gap-2 justify-center">
              <button onClick={handleEdit} className='py-1 px-3 border-2 rounded-md font-medium bg-gray-300 hover:bg-gray-400'>Edit Hero</button>
              <button onClick={handleDelete} className='py-1 px-3 border-2 rounded-md font-medium bg-gray-300 hover:bg-gray-400'>Delete Hero</button>
            </div>
          </div>
        {/* </Link> */}
      </div>
    </>
  )
}

export default HeroBigCard