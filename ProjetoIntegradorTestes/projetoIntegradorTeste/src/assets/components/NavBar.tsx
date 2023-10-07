import { Link, useNavigate } from "react-router-dom"
import '../../index.css'

function NavBar() {

  const navigate = useNavigate()

  return (
    <>

      <header className="w-4/5 rounded-2xl py-6 px-3 bg-amber-300">
        <nav className="">
          <ul className="flex justify-between">

            <div className="flex gap-8">
              <li><img src="" alt="Logo Projeto" className="text-rose-500 text-xl" /></li>
              <li><Link to='/Sobre' className="text-rose-500 text-xl">Sobre</Link></li>
              <li><Link to='/Missao' className="text-rose-500 text-xl">Missão</Link></li>
              <li><Link to='/outracoisa' className="text-rose-500 text-xl">outracoisa</Link></li>
            </div>

            <div className="flex gap-2">
              <li className="text-rose-500 text-xl"><Link to='/Login'>Login</Link></li>
              <li className="text-rose-500 text-xl"><button onClick={() => navigate('/Registrar')}>Cadastre-Se</button></li>
            </div>

          </ul>
        </nav>

      </header>

    </>
  )
}

export default NavBar