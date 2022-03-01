import React, { useState } from "react";
import "../css/CreateOrderModal.css";
const CreateOrderModal = ({ modalVisible }) => {
	const [orderName, setOrderName] = useState("");
	const [itemName, setItemName] = useState("");
	const [category, setCategory] = useState("");
	const [qty, setQty] = useState("");
	console.log(itemName);
	return (
		<>
			{modalVisible ? (
				<div className='modal-cont'>
					<div className='modal-view'>
						<div className='create-head'>CREATE ORDER</div>
						<div className='create-box'>
							<div className='createOrder-left'>
								<div className='create-inputs'>
									<label className='create-label'>Order Name</label>
									<input
										className='create-input'
										value={orderName}
										type='text'
										name='orderName'
										onChange={(e) => setOrderName(e.target.value)}
									/>
									<label className='create-label'>Item Name</label>
									<input
										className='create-input'
										value={itemName}
										type='text'
										name='itemName'
										onChange={(e) => setItemName(e.target.value)}
									/>
									<label className='create-label'>Category</label>
									<select value={category}>
										<option value='Grocery'>Grocery</option>
										<option value='Fish ans meat'>Fish ans meat</option>
										<option value='Stationary'>Stationary</option>
									</select>
									<label className='create-label'>Quantity</label>
									<select value={qty}>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
									</select>
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
