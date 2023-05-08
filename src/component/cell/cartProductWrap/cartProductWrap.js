import CartProduct from "../cartProduct/cartProduct";
import { useState } from "react";

function CartProductWrap({ prop }) {
	return (
		<div>
			<h2 className="pl-6 pb-4">Your Cart:</h2>
			{prop.map((product, index) => (
				<CartProduct key={index} prop={product} />
			))}
		</div>
	);
}

export default CartProductWrap;
