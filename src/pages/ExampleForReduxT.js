import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, incrementByfive } from "../redux/counter";

const ExampleForReduxT = () => {
	// take count from reducer  ---- counter: counterReducer,
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	

	return (
		<div>
			<h1>Count:{count}</h1>
			<button onClick={() => dispatch(increment())}>Inc</button>
			<button onClick={() => dispatch(incrementByfive())}>IncBy5</button>
			<button onClick={() => dispatch(decrement())}>Dec</button>
			<button onClick={() => dispatch(incrementByAmount(2))}>Inc by 2</button>
		</div>
	);
};

export default ExampleForReduxT;
