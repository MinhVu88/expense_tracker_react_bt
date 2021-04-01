import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeXpenses = () => {
	const { transactions } = useContext(GlobalContext);

	// TypeError: Reduce of empty array with no initial value
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
	const income = transactions
		.map(transaction => transaction.amount)
		.filter(amount => amount > 0)
		.reduce((accumulator, value) => (accumulator += value), 0)
		.toFixed(2);

	const expense = transactions
		.map(transaction => transaction.amount)
		.filter(amount => amount < 0)
		.reduce((accumulator, value) => (accumulator += value), 0)
		.toFixed(2);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">+${income}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">-${Math.abs(expense)}</p>
			</div>
		</div>
	);
};

export default IncomeXpenses;
