import logo from "../../../acsset/img/logo.png";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<div>
			<Link to="/" className="flex">
				<img src={logo} alt="#" />
				<h1 className="block my-auto text-3xl font-bold">
					Clothes-Shop
				</h1>
			</Link>
		</div>
	);
}

export default Logo;
