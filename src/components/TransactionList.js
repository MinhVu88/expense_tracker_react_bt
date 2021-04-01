import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	console.log("\ntransactions ->", transactions, "\n");

	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{transactions.length > 0
					? transactions.map(transaction => (
							<Transaction transaction={transaction} key={transaction.id} />
					  ))
					: "No transactions found"}
			</ul>
		</>
	);
};

export default TransactionList;
