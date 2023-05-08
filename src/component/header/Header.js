// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faCircleXmark,
	faBell,
	faUser,
	faCartShopping,
	faGears,
	faRightToBracket,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Link } from "react-router-dom";

import style from "./header.module.scss";
import Logo from "../cell/Logo/Logo";

function Header() {
	return (
		<div className={clsx(style.header)}>
			<Logo />
			<div className={clsx(style.search)}>
				<input placeholder="search" spellCheck={false} required />
				<button className="">
					<FontAwesomeIcon icon={faCircleXmark} />
				</button>
				<button className={clsx(style.searchBtn)}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
				{/* loading  */}
			</div>
			<div className={clsx(style.userLocation)}>
				<div>
					<button>
						<FontAwesomeIcon icon={faBell} />
					</button>
				</div>
				<div>
					<button className={clsx(style.userSlide)}>
						<FontAwesomeIcon icon={faUser} />
						<ul className={clsx(style.Slide)}>
							<div className={clsx(style.slideIcon)}>
								<FontAwesomeIcon icon={faUser} />
							</div>
							<li>
								<Link to="/Seting">
									<FontAwesomeIcon icon={faGears} />
									Setting
								</Link>
							</li>
							<li>
								<Link to="/Login">
									<FontAwesomeIcon icon={faRightToBracket} />
									Login
								</Link>
							</li>
							<li>
								<Link to="/Register">
									<FontAwesomeIcon icon={faUserPlus} />
									Register
								</Link>
							</li>
						</ul>
					</button>
				</div>
				<div>
					<button>
						<Link to="/Cart">
							<FontAwesomeIcon icon={faCartShopping} />
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
