import React from 'react'

const Preloader = () => {
    return (
        <div className="preloader">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="lds-spinner">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Preloader
