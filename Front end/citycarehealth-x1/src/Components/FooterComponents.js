import React from 'react'

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
						<li><a href="#facebook">facebook</a></li>
						<li><a href="#Twitter">Twitter</a></li>
						<li><a href="#Instagram">Instagram</a></li>
						<li><a href="#Yotube">YouTube</a></li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6 b">
					<h5>Hospital Admin</h5>
					<ul>
						<li><a href="/login">Login</a></li>
						<li><a href="/">Get track of bed-availability</a></li>
						<li><a href="/">Get track of oxygen-availability</a></li>
						<li><a href="/">Get the patient request</a></li>
						<li><a href="/">Status of patient</a></li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6">
					<h5>User</h5>
					<ul>
						<li><a href="/">Register</a></li>
						<li><a href="/">Get the Hospital Details</a></li>
						<li><a href="/">Search bed availability</a></li>
						<li><a href="/">Track your status</a></li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6">
					<h5>Have a question?</h5>
					<ul>
						<li><a href="/"> 603, Race course road, Mumbai,
								India</a></li>
						<li><a href="/">+91 2292 3929 210</a></li>
						<li><a href="/">info@cityhealthcare.com</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
    </div>
  )
}

export default FooterComponents
