import React, { useState } from 'react';
import '../css/CreateOrderModal.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LineImg from '../images/line.svg';

const CreateOrderModal = ({ modalVisible, setModalVisible }) => {
	const [orderName, setOrderName] = useState('');
	const [itemName, setItemName] = useState('');
	const [category, setCategory] = useState('');
	const [qty, setQty] = useState('');
	const [unit, setUnit] = useState('');

	return (
		<>
			{modalVisible ? (
				<div className='modal-cont'>
					<div className='modal-view'>
						<div className='create-head'>CREATE ORDER</div>
						<div className='create-box'>
							<div className='createOrder-left'>
								<div className='create-inputs'>
									<div className='input-box'>
										<label className='create-label'>Order Name</label>
										<input
											className='create-input'
											value={orderName}
											type='text'
											name='orderName'
											onChange={(e) => setOrderName(e.target.value)}
										/>
									</div>
									<div className='input-box-cat'>
										{/* <label className='create-label'>Category</label>
										<select value={category}>
											<option value='Grocery'>Grocery</option>
											<option value='Fish ans meat'>Fish ans meat</option>
											<option value='Stationary'>Stationary</option>
										</select> */}
										<Box sx={{ minWidth: 120 }}>
											<FormControl fullWidth size='small' margin='none'>
												<InputLabel
													id='demo-simple-select-label'
													style={{ padding: '1px' }}
												>
													Category
												</InputLabel>
												<Select
													labelId='demo-simple-select-label'
													id='demo-simple-select'
													value={category}
													label='category'
													onChange={(e) => setCategory(e.target.value)}
												>
													<MenuItem value={10}>Groceries</MenuItem>
													<MenuItem value={20}>Twenty</MenuItem>
													<MenuItem value={30}>Thirty</MenuItem>
												</Select>
											</FormControl>
										</Box>
									</div>
									<img src={LineImg} alt='hr' style={{ width: '100%' }} />
									<div className='input-box'>
										<label className='create-label'>Item Name</label>
										<input
											className='create-input'
											value={itemName}
											type='text'
											name='itemName'
											onChange={(e) => setItemName(e.target.value)}
										/>
									</div>

									<div className='qty-unit'>
										<div className='qty-subunit'>
											<label className='create-label'>Quantity</label>
											<div className='qty-input-div'>
												<input
													className='create-input-qty'
													value={qty}
													type='number'
													name='qty'
													onChange={(e) => setQty(e.target.value)}
												/>
											</div>
										</div>

										<div className='unit'>
											<label className='create-label-unit'>Units</label>
											{/*<select
												value={unit}
												onChange={(e) => setUnit(e.target.value)}>
												<option value='1'>1</option>
												<option value='2'>2</option>
												<option value='3'>3</option>
											</select> */}
											<div className='units-qty'>
												<Box sx={{ minWidth: 120 }}>
													<FormControl fullWidth size='small' margin='none'>
														<InputLabel
															id='demo-simple-select-label'
															//style={{ padding: '1px' }}
														>
															Unit
														</InputLabel>
														<Select
															labelId='demo-simple-select-label'
															id='demo-simple-select'
															value={unit}
															label='category'
															onChange={(e) => setUnit(e.target.value)}
														>
															<MenuItem value={'pieces'}>Pieces</MenuItem>
															<MenuItem value={'Kg'}>Kg</MenuItem>
															<MenuItem value={'Ltr'}>Ltr</MenuItem>
														</Select>
													</FormControl>
												</Box>
											</div>
										</div>
									</div>

									{/* <div className='btns'> */}

									<div className='add-item-btn'>Add Item</div>
									{/* <hr className='create-order-hr' /> */}
									<img src={LineImg} alt='hr' style={{ width: '100%' }} />
									<div className='back' onClick={() => setModalVisible(false)}>
										Back
									</div>

									{/* </div> */}
								</div>
							</div>
							<div className='createOrder-right'>right</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
};

export default CreateOrderModal;
