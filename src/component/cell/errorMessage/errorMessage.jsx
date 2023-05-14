import { BiErrorCircle } from "react-icons/bi";

function ErrorMessage({ message }) {
	return (
		<div className="flex bg-red-200 px-3 text-lg  rounded-lg">
			<div className="text-red-500 my-auto">
				<BiErrorCircle />
			</div>
			<div>
				<p className="text-red-500 font-bold text-lg">{message}</p>
			</div>
		</div>
	);
}

export default ErrorMessage;
