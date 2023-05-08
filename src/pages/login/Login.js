import clsx from "clsx";
import { Link } from "react-router-dom";

import style from "./login.module.scss";
import google from "../../acsset/img/Group 38.png";
import facebook from "../../acsset/img/Group 39.png";

function Login() {
	return (
		<div className={clsx(style.loginWrap)}>
			<div className={clsx(style.banner)}>
				<img
					className=""
					src="https://res.cloudinary.com/dwohqjquz/image/upload/v1679375140/City_Banking_app/IMG_1767_joejb3.jpg"
					alt="#"
				/>
			</div>
			<div className={clsx(style.from)}>
				<h1 className="">Login</h1>
				<div className="">
					<div className="">
						<input
							className=" "
							type="text"
							name="userName"
							placeholder="Email or username"
							required
						/>
						<br></br>
						<input
							className=" "
							type="password"
							name="password"
							placeholder="Password"
							required
						/>

						<button className={clsx(style.loginBtn)}>LOGIN</button>
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
							className={clsx(style.colorBlue, style.fontBold)}>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
export default Login;
