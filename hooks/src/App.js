import { useEffect, useState } from "react";

let App = () => {
	let [count, setCount] = useState(0);

	console.log("render was called");
	// clean up function case 1
	// useEffect ke har case mei function karta hain
	// firt render pe useEffect se clean-up function return hoga
	// fir second re-render pe pehle clean-up function chalega then useEffect chalega
	// ye process continue hogi aage tak
	useEffect(() => {
		console.log("case 2 useEffect was called");

		return () => {
			console.log("clean up function");
		};
	});

	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				-
			</button>
		</div>
	);
};

export default App;
