import { Link } from 'react-router-dom'

function Header() {
    return (
      <div>
      <div>Logo Kasa</div>
        <div>
          <a to="/" href="/"> Accueil</a>
          <a to="/Apropos" href="Apropos"> A Propos</a>
          {/* <div to="/Error">Error</div> */}
        </div>
      </div>
    )
  }
  
  export default Header