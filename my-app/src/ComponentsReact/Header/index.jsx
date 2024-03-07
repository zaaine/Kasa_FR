import { Link } from 'react-router-dom'

function Header() {
    return (
      <div>
      
        <div>
          <div to="/"> Accueil</div>
          <div to="/"> A Propos</div>
          {/* <div to="/Error">Error</div> */}
      
        </div>
      </div>
    )
  }
  
  export default Header