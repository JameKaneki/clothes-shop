import { Link } from "react-router-dom";
import style from "./nav.module.scss";
import clsx from "clsx";

function Nav() {
	return (
		<nav className="">
			<ul className={clsx(style.navWrap)}>
				<li className={clsx(style.navSelect)}>
					<Link to="/product" className="text-white">
						Men
					</Link>
					<ul className={clsx(style.navSlide)}>
						<h3 className="border-b">Men Clothes</h3>
						<li>
							<Link>New</Link>
						</li>
						<li>
							<Link>Áo</Link>
						</li>
						<li>
							<Link>Áo Khoác</Link>
						</li>
						<li>
							<Link>Quần</Link>
						</li>
						<li>
							<Link>Jeans</Link>
						</li>
						<li>
							<Link>Quần đùi</Link>
						</li>
					</ul>
				</li>
				<li className={clsx(style.navSelect)}>
					<Link to="/product" className="text-white">
						Women
					</Link>
					<ul className={clsx(style.navSlide)}>
						<h3 className="border-b">Women Clothes</h3>

						<li>
							<Link>New</Link>
						</li>
						<li>
							<Link>Áo</Link>
						</li>
						<li>
							<Link>Áo Khoác</Link>
						</li>
						<li>
							<Link>Quần</Link>
						</li>
						<li>
							<Link>Jeans</Link>
						</li>
						<li>
							<Link>Chân váy</Link>
						</li>
						<li>
							<Link>Quần đùi</Link>
						</li>
					</ul>
				</li>
				<li className={clsx(style.navSelect)}>
					<Link to="/product" className="text-white">
						Phụ kiên
					</Link>
					<ul className={clsx(style.navSlide)}>
						<h3 className="border-b">Women Clothes</h3>

						<li>
							<Link>Giày</Link>
						</li>
						<li>
							<Link>Túi sách</Link>
						</li>
						<li>
							<Link>Phụ kiện</Link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}
export default Nav;
