import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from '../SideNavBar/NavBar';
import {Switch, Route} from 'react-router-dom';
// screens
import About from '../Screens/AboutSociety';
import Account from '../Screens/Account';
import Events from '../Screens/EventsScreen';
import Pay from '../Screens/Payments';
import ReportsScreen from '../Screens/ReportsScreen';
import Society from '../Screens/SocietyMembersScreen';

const MainContainerScreen = () =>{
	return <>
				<div className="container-fluid main-con">
					<div className="row p-3">
							<div className="col col-md-5 d-inline ps-5">
									<NavMenu/>
							</div>
							<div className="col col-md-7 bg-primary">
							
									<div className="container">
									
										
									
									</div>
							
							</div>
					</div>
				</div>
	</>;
}

export default MainContainerScreen;