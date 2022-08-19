import { Link } from "react-router-dom"

const HeroCard = (props) => {

  const { slug, name, image } = props.hero

  return(
    <>
      <div className="flex justify-center">
        <Link to={`/heroes/${slug}`}>
          <div className="rounded-lg shadow-lg bg-white/80 max-w-sm">
            <img className="rounded-t-lg" src={image} alt={`${name} image`}/>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 capitalize">{name}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default HeroCard