import { useFormContext } from "react-hook-form";
import findInputError from "../../FormUtils/findInputError";
import ErrorMessage from "../cell/errorMessage/errorMessage";

function Input({ name, label, id, type, placeholder, validation }) {
	const {
		register,
		watch,
		formState: { errors },
	} = useFormContext();
	const errorsInput = findInputError(errors, name);
	const errorMessage = errorsInput.error?.message;
	// console.log(errorsInput.error.message);
	return (
		<div className="mb-2">
			<div className="flex justify-between">
				<div className="mt-0">
					<label forhtml={id} className="block text-xl text-bold">
						{label}
					</label>
				</div>
				<div>
					{errorsInput.error ? (
						<ErrorMessage message={errorMessage} />
					) : (
						" "
					)}
				</div>
			</div>
			{/* <input
				id={id}
				type={type}
				placeholder={placeholder}
				{...register(name, validation)}
			/> */}
			{name === "re-password" ? (
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					{...register(name, {
						...validation,
						validate: (value) => {
							if (watch("password") !== value) {
								return "Should match password";
							}
						},
					})}
				/>
			) : (
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					{...register(name, validation)}
				/>
			)}
		</div>
	);
}

export default Input;
