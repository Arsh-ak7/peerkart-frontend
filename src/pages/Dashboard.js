import React from "react";
import {useState} from "react";
import profiletop from "../images/profile-top.png";
import avatar from "../images/avatar.png";
import "../css/Dashboard.css";
import update from"../images/pencil.png";
import moneyicon from"../images/money-icon.jpg";
import tranrupee from "../images/tranrupee.jpg";
import trancoin from "../images/trancoin.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus,faPencil} from "@fortawesome/free-solid-svg-icons";
import Modal from "../compnents/Modal";

const Dashboard = () => {
	const [modalOrderOpen, setModalOrderOpen] = useState(false);
	return(
		<>
		<div className="wrapper">
			<div className="top-box">
				<img className="profiletop" src={profiletop}></img>
				<div className='profilewrap'>
					<img src={avatar} className='avatarimg' alt='profile-img'/>
						<div className='profileinfodiv'>
							<p className='profileinfoname'>Kush Jaiswal</p>
							<div className='profileinfoAddress'>+91 9876543210</div>
						</div>
				</div>
				<div className="middle-boxes">
					<div className="mid-boxes profile_div">
						<p className="heading-boxes">Profile Information<span className="update_profile_icon"><FontAwesomeIcon className="pluspencil" icon={faPencil}></FontAwesomeIcon></span></p>
						<p className="profileboxinfo"><span className="profileboxinfotag">Full Name:</span> <span className="profileboxinfoanswer">Kush Jaiswal</span></p>
						<p className="profileboxinfo"><span className="profileboxinfotag">Mobile:</span> <span className="profileboxinfoanswer">+91 9876543210</span></p>
						<p className="profileboxinfo"><span className="profileboxinfotag">Email:</span> <span className="profileboxinfoanswer">kush.jaiswal@iiitg.ac.in</span></p>
						<p className="profileboxinfo"><span className="profileboxinfotag">Address:</span></p>
						<p className="profileboxlineinfo"><span className="profileboxinfoanswer">IIIT Guwahati Boys Hostel, Guwahati</span></p>
						
						<p className="profileboxinfo"><span className="profileboxinfotag">Default Payment Method:</span></p>
						<p className="profileboxlineinfo"> <span className="profileboxinfoanswer">Method Name: UPI</span></p>
						<p className="profileboxlineinfo"> <span className="profileboxinfoanswer">Details:</span></p>
						<p className="profileboxlineinfo"> <span className="profileboxinfoanswer">Associated Bank: AXIS Bank</span></p>
						<p className="profileboxlineinfo"> <span className="profileboxinfoanswer">UPI ID: xxxx xxxx 3415</span></p>
					</div>
					<div className="mid-boxes order_created_div">
						<p className="heading-boxes upper">Orders Generated</p>
						<div className="created_list">
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper" onClick={()=>{setModalOrderOpen(true);console.log("hi");}}>manage</span>
							</div>
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper green" onClick={()=>{setModalOrderOpen(true)}}>view</span>
							</div>
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper" onClick={()=>{setModalOrderOpen(true)}}>manage</span>
							</div>
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper" onClick={()=>{setModalOrderOpen(true)}}>manage</span>
							</div>
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper green" onClick={()=>{setModalOrderOpen(true);console.log("hi2")}}>view</span>
							</div>
						</div>
						<div className="moretransaction">
							<FontAwesomeIcon className="plusicon" icon={faPlus}></FontAwesomeIcon>
							<span className="moretranstext">Show More Orders</span>
						</div>
					</div>
				</div>
				<div className="middle-boxes">
					<div className="mid-boxes order_accepted_div">
						<p className="heading-boxes upper">Orders Accepted</p>
						<div className="accepted_list">
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper">manage</span>
							</div>
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper green">view</span>
							</div>
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper">manage</span>
							</div>
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper">manage</span>
							</div>
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper green">view</span>
							</div>
						</div>
						<div className="moretransaction">
							<FontAwesomeIcon className="plusicon" icon={faPlus}></FontAwesomeIcon>
							<span className="moretranstext">Show More Orders</span>
						</div>
					</div>
					<div className="mid-boxes transaction_div">
						<p className="heading-boxes upper">Transaction History</p>
						<div className="transaction_list">
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 green-color">345</span>
								<span className="transaction_list_item_3 green">View</span>
							</div>
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 green-color">345</span>
								<span className="transaction_list_item_3 green">View</span>
							</div>
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 red-color">345</span>
								<span className="transaction_list_item_3">View</span>
							</div>
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 green-color">345</span>
								<span className="transaction_list_item_3 green">View</span>
							</div>
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 red-color">345</span>
								<span className="transaction_list_item_3">View</span>
							</div>
						</div>
						<div className="moretransaction">
							<FontAwesomeIcon className="plusicon" icon={faPlus}></FontAwesomeIcon>
							<span className="moretranstext">Show More Transactions</span>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		{modalOrderOpen && <Modal setModalOrderOpen={setModalOrderOpen}/>}
		</>
		
	) 
};

export default Dashboard;
