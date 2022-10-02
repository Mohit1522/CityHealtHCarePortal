import React from 'react'
import { Link } from 'react-router-dom'

const FooterComponents = () => {
  return (
    <div >
	
      <footer id="footer" bg="secondary" className='sticky'>
	<br/>
		<div className="container footer">
			<div className="row">
				<div className="col-md-3 col-sm-6">
				
					<h3>About</h3>
					<p>We aim's to provide the details of medical services of city on our website</p>
					<ul>
						<li><a href="https://www.facebook.com/">facebook</a></li>
						<li><a href="https://twitter.com/?lang=en-in">Twitter</a></li>
						<li><a href="https://www.instagram.com/">Instagram</a></li>
						<li><a href="https://www.youtube.com/?gl=IN">YouTube</a></li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6 b">
					<h5>Hospital Admin</h5>
					<ul>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/admindashboard">Get track of bed-availability</Link></li>
						<li><Link to="/admindashboard">Get track of oxygen-availability</Link></li>
						<li><Link to="/admindashboard">Get the patient request</Link></li>
						<li><Link to="/admindashboard">Status of patient</Link></li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6">
					<h5>User</h5>
					<ul>
						<li><Link to="/userdashboard">Register</Link></li>
						<li><Link to="/userdashboard">Get the Hospital Details</Link></li>
						<li><Link to="/userdashboard">Search bed availability</Link></li>
						<li><Link to="/userdashboard">Track your status</Link></li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6">
					<h5>Have a question?</h5>
					<ul>
						<li><Link to="/contactus"> 603, Race course road, Mumbai,
								India</Link></li>
						<li><Link to="/contactus">+91 2292 3929 210</Link></li>
						<li><Link to="/contactus">info@cityhealthcare.com</Link></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
    </div>
  )
}

export default FooterComponents
