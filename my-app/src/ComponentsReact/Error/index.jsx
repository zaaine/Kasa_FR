import { Link } from 'react-router-dom'
import style_Error from '../../Styles/5.Pages/Error404/style_Error.scss'

function Error() {
    return (
      <div className='LayoutPage404'>
        <h1 className='number404'> 404</h1>

        <p className='text404'>Oups! La page que vous demandez n'existe pas.</p>

        <a className='linkHome' href='../Home/index.jsx'> Retourner sur la page d’accueil </a>
      </div>
    )
  }
  
  export default Error