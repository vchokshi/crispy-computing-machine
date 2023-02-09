import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="error-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="error-content">
                        <img src="/images/404.png" alt="error" />
                        <h3>Page Not Found</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                        <Link href="/">
                            <a className="default-btn">
                                Go To Home
                            </a>
                        </Link>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Custom404;