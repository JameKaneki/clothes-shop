import { useReducer } from "react";
import { CartDataContext } from "./Context";
import { initCart, cartReducer } from "./cartReducer";

function Provider({ children }) {
	const [cartState, cartDispatch] = useReducer(cartReducer, initCart);
	// chưa xong

	// chưa xong
	return (
		<CartDataContext.Provider value={[cartState, cartDispatch]}>
			{children}
		</CartDataContext.Provider>
	);
}

export default Provider;
