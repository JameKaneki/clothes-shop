import clsx from "clsx";
import style from "./noProductInCart.module.scss";
import ShopCart from "../../../acsset/img/shop-cart.png";
import { Link } from "react-router-dom";

function NoProductInCart() {
	return (
		<div className={clsx(style.noneProduct)}>
			<img src={ShopCart} alt="#" />
			<p>Chưa có sản phẩm nào trong giỏ </p>
			<Link to={"/"}>Back to home</Link>
		</div>
	);
}

export default NoProductInCart;
