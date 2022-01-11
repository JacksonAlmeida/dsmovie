import { ReactComponent as GithubIcon } from 'assets/img/icons8-github.svg';
import './styles.css';

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DsMovie</h1>
                    <a href="https://github.com/JacksonAlmeida">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/JacksonAlmeida</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;