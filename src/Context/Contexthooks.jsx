import { useContext } from "react";
import { CartDataContext } from "./Context";

const useCartData = () => {
	const [cartState, cartDispatch] = useContext(CartDataContext);
	return [cartState, cartDispatch];
};

export { useCartData };
