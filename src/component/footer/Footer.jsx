import { Link } from "react-router-dom";
import clsx from "clsx";

import style from "./footer.module.scss";
import Logo from "../cell/Logo/Logo";

function Footer() {
	return (
		<div className={clsx(style.footer)}>
			<div>
				<Logo />
			</div>
			<div className={clsx(style.selectionWrap)}>
				<div className={clsx(style.selection)}>
					<h3>SERVICE</h3>
					<Link to="/service">Product</Link>
					<Link to="/service">Contact Us</Link>
				</div>
				<div className={clsx(style.selection)}>
					<h3>SUPPORT</h3>
					<Link to="/service">Product</Link>
					<Link to="/service">Contact Us</Link>
				</div>
				<div className={clsx(style.selection)}>
					<h3>FOLLOW US ON</h3>
					<Link to="/service">Product</Link>
					<Link to="/service">Contact Us</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
