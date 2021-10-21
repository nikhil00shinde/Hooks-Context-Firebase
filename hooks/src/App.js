import { useState } from "react";

let App = () => {
	console.log("this will be called on every render");

	// useState return array, us array ke andhar 2 cheeje hoti hai
	// pehli us state ki value hoti hain
	// dusri ek function hota => ye function se hum apne state ki value change kar sakte hain
	
	let [count, setCount] = useState(0);
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
