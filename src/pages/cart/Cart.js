import clsx from "clsx";
import style from "./cart.module.scss";

import { useCartData } from "../../Context/Contexthooks";

import ShippingInfo from "../../component/cell/shippingInfo/shippingInfo";
import PayingCheck from "../../component/cell/payingCheck/payingCheck";
import NoProductInCart from "../../component/cell/noProductInCart/noProductInCart";
import CartProductWrap from "../../component/cell/cartProductWrap/cartProductWrap";

function Cart() {
	const [cartState, cartDispatch] = useCartData();
	return (
		<div className={clsx(style.cartWrap)}>
			<div className={clsx(style.componentWrap, style.content)}>
				{cartState.length !== 0 ? (
					<CartProductWrap prop={cartState} />
				) : (
					<NoProductInCart />
				)}
			</div>
			<div className={clsx(style.sibar)}>
				<div className={clsx(style.componentWrap)}>
					<PayingCheck prop={cartState} />
				</div>
				<div className={clsx(style.componentWrap)}>
					<ShippingInfo />
				</div>
			</div>
		</div>
	);
}

export default Cart;
