import { useState } from "react";

let App = () => {
	console.log("this will be called on every render");
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