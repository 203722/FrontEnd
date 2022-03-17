import './Navbar.css';

export default function Navbar() {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Inicio</a>
                    </li>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                    <li>
                        <a href='/register'>Registrarse</a>
                    </li>
                    <li>
                        <a href='/profile'>Ver Perfil</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}