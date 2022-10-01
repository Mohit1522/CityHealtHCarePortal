import React from 'react'

const FeaturesComponents = () => {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
      <div className="container features">
			<div className="row">
				<div className="col-md-3 col-sm-6">
					<div className="feature">
						<i className="fa fa-search" aria-hidden="true"></i>
						<h5>Mission</h5>
						<p>It is a platform where Admin can track the Availability of all 
						necessities so that at the time of emergency it will be easy to 
                             grab that use it for the human welfare.</p>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="feature">
						<i className="fa fa-users" aria-hidden="true"></i>
						<h5>Vision</h5>
						<p>In future we will be having all the city's hospital with us
                        so that the exact details of medical service, contact of ambulance,
                        blood and oxygen availability can be tracked.
                        </p>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="feature">
						<i className="fa fa-briefcase" aria-hidden="true"></i>
						<h5>Hospitals</h5>
						<p>User can also register as a user can book a hospital 
                            bed in the hospital which are registered on the portal and 
                            can track the status of the request.</p>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="feature">
						<i className="fa fa-user" aria-hidden="true"></i>
						<h5> Expert Doctors</h5>
						<p>User can also see the list of doctors available in the hospital 
                        so that he will get the idea that he will get the required and 
                        satisfactory treatment or not.</p>
					</div>
				</div>
			</div>
		</div>

    </div>
  )
}

export default FeaturesComponents
