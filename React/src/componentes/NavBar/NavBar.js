import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return ( 
        <nav>
            <div>
                <h1>INFINITE</h1>
                <button>Damas</button>
                <button>Hombres</button>
                <button>Niños</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar