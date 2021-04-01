import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	// TypeError: Reduce of empty array with no initial value
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
	const totalBalance = transactions
		.map(transaction => transaction.amount)
		.reduce((accumulator, value) => (accumulator += value), 0)
		.toFixed(2);

	return (
		<>
			<h4>Your Balace</h4>
			<h1>${totalBalance}</h1>
		</>
	);
};

export default Balance;
