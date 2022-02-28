import React from "react";
import "../css/Sidebar.css";
import { Link } from "react-router-dom";
import {
	Dashboard,
	CreditCard,
	Login,
	Logout,
	AssignmentInd,
	RocketLaunch,
} from "@mui/icons-material";

const Sidebar = () => {
	return (
		<div className='sidebar-con'>
			<div className='side'>
				<div className='logo'>Logo</div>
				<ul className='side-menu'>
					<Link to='/' className='sidelink'>
						<li className='side-option'>
							<div className='side-icon'>
								<div className='side-icon-shadow'>
									<AssignmentInd />
								</div>
							</div>
							<div className='side-text'>Home</div>
						</li>
					</Link>
					<Link to='/dashboard' className='sidelink'>
						<li className='side-option'>
							<div className='side-icon'>
								<div className='side-icon-shadow'>
									<Dashboard />
								</div>
							</div>
							<div className='side-text'>Dashboard</div>
						</li>
					</Link>
					<Link to='/tracking' className='sidelink'>
						<li className='side-option'>
							<div className='side-icon'>
								<div className='side-icon-shadow'>
									<RocketLaunch />
								</div>
							</div>
							<div className='side-text'>Tracking</div>
						</li>
					</Link>
					<Link to='/login' className='sidelink'>
						<li className='side-option'>
							<div className='side-icon'>
								<div className='side-icon-shadow'>
									<Login />
								</div>
							</div>
							<div className='side-text'>Sign Up</div>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
