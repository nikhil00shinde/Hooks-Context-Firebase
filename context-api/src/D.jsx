import { useContext } from "react";
// step 5: import the context you exported in the component where you want to get the state
import { countContext } from "./A";

let D = () => {
	// step 6: inside the functional component call useContext and give it the context
	// from which you want the value
	let valueObject = useContext(countContext);
	return (
		<div>
			<button
				onClick={() => {
					valueObject.setCount(valueObject.count + 1);
				}}
			>
				+
			</button>
			<p>{valueObject.count}</p>
			<button
				onClick={() => {
					valueObject.setCount(valueObject.count - 1);
				}}
			>
				-
			</button>
		</div>
	);
};

export default D;
