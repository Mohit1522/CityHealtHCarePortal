import React from 'react'
import {Link} from 'react-router-dom'
import logo from './images/cityCareLogo.jpg'
function ErrorPageComponent() {
  return (
      <div class="d-flex align-items-center justify-content-center vh-100" style={{backgroundColor:'whitesmoke'}}>
      <div className="text-center ">
        <div className='d-flex offset-4 '> <span className='display-2'>4</span> <Link to='/' style={{position:'relative',bottom:'-15px'
}}><img  src={logo} height='70px' width='70px' alt='img'/></Link><span className='display-2'>4</span></div>
          <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
          <p className="lead">
              The page you’re looking for doesn’t exist.
            </p>
          <Link to="/" className="btn btn-primary">Go Home</Link>

      </div>
  </div>


  )
}

export default ErrorPageComponent