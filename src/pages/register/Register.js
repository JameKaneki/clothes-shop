import clsx from "clsx";
import style from "./register.module.scss";
import { Link } from "react-router-dom";

import google from "../../acsset/img/Group 38.png";
import facebook from "../../acsset/img/Group 39.png";
function Register() {
	return (
		<div className={clsx(style.registerWrap)}>
			<div className={clsx(style.banner)}>
				<img
					className=""
					src="https://res.cloudinary.com/dwohqjquz/image/upload/v1679375140/City_Banking_app/IMG_1767_joejb3.jpg"
					alt="#"
				/>
			</div>
			<div className={clsx(style.from)}>
				<h1 className="">Register</h1>
				<div>
					<div className="">
						<div className="">
							<input
								className=""
								type="text"
								placeholder="UserName"
							/>
							<input
								className=""
								type="text"
								placeholder="email"
							/>
							<input
								className=""
								type="password"
								placeholder="Password"
							/>
							<input
								className=""
								type="password"
								placeholder="Re-Password"
							/>
						</div>
					</div>
					<div>
						<button className={clsx(style.addBtn)}>REGISTER</button>
					</div>
				</div>
				<div className={clsx(style.registerWith)}>
					<p>Or login width</p>
					<button>
						<img src={google} alt="$" />
					</button>
					<button>
						<img src={facebook} alt="$" />
					</button>

					<h3>
						Already have an account ?{" "}
						<Link
							to="/Login"
							className={clsx(style.colorBlue, style.fontBold)}>
							Sign up
						</Link>
					</h3>
				</div>
			</div>
		</div>
	);
}
export default Register;
