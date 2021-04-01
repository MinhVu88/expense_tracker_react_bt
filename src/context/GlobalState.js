import React, { createContext, useReducer } from "react";
// import {v4 as uuidv4} from 'uuid';
import AppReducer from "./AppReducer";

const initialState = {
	transactions: [
		// { id: uuidv4(), text: 'Flower', amount: -20 },
		// { id: uuidv4(), text: 'Salary', amount: 300 },
		// { id: uuidv4(), text: 'Book', amount: -10 },
		// { id: uuidv4(), text: 'Camera', amount: 150 }
	]
};

const GlobalContext = createContext(initialState);

// the GlobalProvider component provides state & actions
// to the sub-components (children) that it wraps around
const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// actions
	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export { GlobalContext, GlobalProvider };
