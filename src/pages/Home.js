import { Link } from "react-router-dom"

const Home = () => {

  return(
    <>
      <section className="flex flex-col items-center">
        <h1 className="text-5xl text-center my-24 font-medium text-slate-800 rounded-lg px-3 shadow-lg shadow-gray-400 text-shadow-lg drop-shadow-xl bg-slate-300/50">Welcome to the Heroes</h1>
        <Link to={'/heroes'} className='text-xl border-4 border-gray-600/50 p-2 rounded-lg bg-gray-500/30 text-white font-medium hover:bg-gray-500/60'>Show Heroes</Link>
      </section>
    </>
  )
}

export default Home