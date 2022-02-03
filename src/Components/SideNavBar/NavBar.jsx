import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SideNavBar/NavBarStyle.css';
import Logo from '../Images/logo.png';

const Reports = () => {
	return (
		<>
			<div>

				<div className="con" style={{}}>

				<img src={Logo} alt={'e-society logo'} className="logo" />

					<div className="nav-menu">

						<ul className="nav-items">
							
							<li className="pt-2">
								<a href="">
										<div className="icon">
											<i class="bi bi-grid-fill nav-icons"></i>
										</div>
										Events
									</a>
							</li>

							<li className="pt-2">
								<a href="">
										<div className="icon">
											<i class="bi bi-people-fill nav-icons"></i>
										</div>
										Society Members
									</a>
							</li>

							<li className="pt-2">
								<a href="">
										<div className="icon">
											<i class="bi bi-file-pdf-fill nav-icons"></i>
										</div>
										Reports
									</a>
							</li>

							<li className="pt-2">
								<a href="">
										<div className="icon">
											<i class="bi bi-wallet-fill nav-icons"></i>
										</div>
										Payments
									</a>
							</li>

							<li className="pt-2">
								<a href="">
										<div className="icon">
											<i class="bi bi-person-workspace nav-icons"></i>
										</div>
										Account
									</a>
							</li>

							<li className="pt-2">
								<a href="">
										<div className="icon">
											<i class="bi bi-info-square-fill nav-icons"></i>
										</div>
										About Society
									</a>
							</li>

						</ul>

					</div>

					<div className="logout-btn-con pt-4 mt-4">
						<li className="logout">
								<button className="btn btn-danger">
										<div className="icons">
												<i class="bi bi-box-arrow-right"></i>
										</div>
										Logout
								</button>
						</li>
					</div>
				</div>

			</div>
		</>
	);
}

export default Reports;