import React, { useState, useContext } from "react";
import Loginbackground from "../images/logincover.svg";
import Loginfooter from "../images/loginfooter.svg";
import "../css/Login.css";
import {Link} from 'react-router-dom';

export default function Login() {
	return (
		<div className='login-main'>
			<div className='login-container'>
				<div className='login-left'>
					<div className='login-wrapper'>
						<div className='login-header'>
							<span> Sign In</span>
						</div>
						<div className='login-subtext'>
							<span>Enter your email and password to sign in</span>
						</div>
						<form className='login-form'>
							<label>Email</label>
							<input
								type='text'
								className='input-field'
								name='username'
								placeholder='Email'
							/>
							<label>Password</label>
							<input
								type='password'
								className='input-field'
								name='password'
								placeholder='Password'
							/>
							<button type='submit' className='login-button'>
								SIGN IN
							</button>
						</form>
						<div className='login-gotosignup'>
							<span>
								Don't have an account?
								<span className='bluetext'>
									<Link className='redirect-links' to='/register'>
										Sign up
									</Link>
								</span>{" "}
							</span>
						</div>
					</div>
				</div>
				<div className='login-right'>
					<img src={Loginbackground} className='login-back' alt='login-bb' />
				</div>
			</div>
			<div className='login-footer'>
				<img
					src={Loginfooter}
					alt='login-footer'
					className='login-footer-img'
				/>
			</div>
		</div>
	);
}

