import React, { useState } from "react";
import Registerfooter from "../images/loginfooter.svg";
import RegisterHome from "../images/registerHome.svg";
import GoogleIcon from "../images/google.svg";
import FacebookIcon from "../images/facebook.svg";
import AppleIcon from "../images/apple.svg";
import "../css/Register.css";
import {Link} from "react-router-dom";

export default function Register() {

	return (
		<div className='register-main'>
			<div className='register-container'>
				<img src={RegisterHome} className='register-cover' alt='img-main' />
				<div className='register-form-wrapper'>
					<div className='register-title'>Sign Up</div>
					<div className='register-form-cont'>
						<div className='register-imgs'>
							<img src={AppleIcon} alt='apple icon' />
							<img src={FacebookIcon} alt='facebook' />
							<img src={GoogleIcon} alt='google' />
						</div>
						<div className='or'>
							<span>Or</span>
						</div>
						<form className='register-form'>
							<label className='register-label'>Username</label>
							<input
								type='text'
								className='input-field-register'
								name='username'
								placeholder='Username'
							/>
							<label className='register-label'>Email</label>
							<input
								type='text'
								className='input-field-register'
								name='email'
								placeholder='Email'
							/>
							<label className='register-label'>Password</label>
							<input
								type='password'
								className='input-field-register'
								name='password'
								placeholder='Password'
							/>
							<div className='register-btn-cont'>
								<button type='submit' className='register-button'>
									REGISTER
								</button>
							</div>
						</form>
						<div className='already-have'>
							Already have an account?
							<Link to='/login' className='redirect-links'>
								Sign in
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='register-footer'>
				<img
					src={Registerfooter}
					alt='img-main'
					className='register-footer-img'
				/>
			</div>
		</div>
	);
}
