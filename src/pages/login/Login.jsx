import clsx from "clsx";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import style from "./login.module.scss";
import google from "../../acsset/img/Group 38.png";
import facebook from "../../acsset/img/Group 39.png";
import Input from "../../component/input/input";
import {
	userName_Login,
	password_Login,
} from "../../FormUtils/inputValidation";

function Login() {
	const methods = useForm();

	const navigate = useNavigate();

	const postData = async (data) => {
		const response = await fetch("http://localhost:8088/login", {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json",

				"Content-Type": "application/x-www-form-urlencoded",
			},
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		});
		// if (response.status === 201) {
		// 	navigate("/");
		// } else {
		// 	methods.setError("email", {
		// 		type: "has use",
		// 		message: "email has been used",
		// 	});
		// }
		console.log(response.status);
	};

	const onSubmit = methods.handleSubmit((data) => {
		console.log(data);
		postData(data);
	});

	return (
		<div className={clsx(style.loginWrap)}>
			<div className={clsx(style.banner)}>
				<img
					className=""
					src="https://res.cloudinary.com/dwohqjquz/image/upload/v1679375140/City_Banking_app/IMG_1767_joejb3.jpg"
					alt="#"
				/>
			</div>
			<FormProvider {...methods}>
				<form
					className={clsx(style.from)}
					onSubmit={(e) => e.preventDefault()}>
					<h1 className="">Login</h1>
					<div className="">
						<div className="">
							<Input {...userName_Login} />
							<Input {...password_Login} />
							<button
								className={clsx(style.loginBtn)}
								onClick={onSubmit}>
								LOGIN
							</button>
						</div>
					</div>
					<div className={clsx(style.forgotPassWord)}>
						<Link
							to="./ForgotPassword"
							className={clsx(style.colorBlue)}>
							Forgot password?
						</Link>

						<div className={clsx(style.loginWith)}>
							<p>Or login width</p>
							<button>
								<img src={google} alt="$" />
							</button>
							<button>
								<img src={facebook} alt="$" />
							</button>
						</div>
						<p>
							Don’t have an account yet?
							<Link
								to="/Register"
								className={clsx(
									style.colorBlue,
									style.fontBold,
								)}>
								Sign up
							</Link>
						</p>
					</div>
				</form>
			</FormProvider>
		</div>
	);
}
export default Login;
