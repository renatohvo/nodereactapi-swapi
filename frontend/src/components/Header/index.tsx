import logo from '../../assets/img/logo.svg';
import './style.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="React + Node - API" />
                <h4>SWAPI Database Populating Integration</h4>
                <p>
                    Desenvolvido por <a href="https://linkedin.com/in/renatohvo">@renatohvo</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
