import React from 'react'




function navbarlog(){
  return(
    <div>
    <div className="nav_menu navigation" id="nav-menu">
      <div className="row">
        <div className="col-md-3 justify-content-space-between">
          <div className="row title-bar">
          </div>
        </div>
        <div className="col-md-9">
          <nav className="row">
            <div className="col-sm-7">
              <ul className="nav_bar">
                <li><a href="/"><h5>Home</h5></a></li>
                <li><a href="/"><h5>About</h5></a></li>
                <li><a href="/"><h5>Blog</h5></a></li>
                <li><a href="/contactus"><h5>Contact</h5></a></li>
                <li><a href="/login"><h5>Login</h5></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  );
}

function navbarlog2(){
  return(
    <div>
    <div className="nav_menu navigation" id="nav-menu">
      <div className="row">
        <div className="col-md-3 justify-content-space-between">
          <div className="row title-bar">
          </div>
        </div>
        <div className="col-md-9">
          <nav className="row">
            <div className="col-sm-7">
              <ul className="nav_bar">
                <li><a href="/"><h5>Home</h5></a></li>
                <li><a href="/"><h5>About</h5></a></li>
                <li><a href="/"><h5>Blog</h5></a></li>
                <li><a href="/contactus"><h5>Contact</h5></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  );
}

const NavBarComponents = () => {
  let adminLogin = localStorage.getItem('admin');

  return (
 <>
        {adminLogin ? <navbarlog2/> : <navbarlog/>}
 </>
  )
}

export default NavBarComponents
