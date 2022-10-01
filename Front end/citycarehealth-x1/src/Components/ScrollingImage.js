import React from 'react'
import imgHospital1 from './images/hospital1.webp'
import imgHospital2 from './images/hospital2.jpg'
import imgHospital3 from './images/hospital1.png'
import imgHospital4 from './images/hospital3.jpg'
const ScrollingImage = () => {
  return (
    <div>
      	<div id="category">
			<div className="container">
				<div className="row">
					<div className="col heading">
						<h3 className="category_heading m-auto text-light">Hospitals with us</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 col-sm-6">
						<img src={imgHospital1} width="50%" alt="hospital1" />
					</div>
					<div className="col-md-3 col-sm-6">
						<img src={imgHospital2} width="50%" alt="hospital2" />
					</div>
					<div className="col-md-3 col-sm-6">
						<img src={imgHospital3} width="50%" alt="hospital3" />
					</div>
                    <div className="col-md-3 col-sm-6">
						<img src={imgHospital4} width="50%" alt="hospital4" />
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default ScrollingImage
