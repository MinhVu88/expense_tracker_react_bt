import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);

	const handleSubmit = e => {
		e.preventDefault();

		const newTransaction = {
			id: uuidv4(),
			text,
			amount: +amount
		};

		addTransaction(newTransaction);

		setText("");
		setAmount(0);
	};

	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="text">Item</label>
					<input
						type="text"
						placeholder="Enter item..."
						value={text}
						onChange={e => setText(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type="number"
						placeholder="Enter amount..."
						value={amount}
						onChange={e => setAmount(e.target.value)}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
};

export default AddTransaction;
