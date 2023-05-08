// - Add (...state,input)
// - Remove : - remove (amount - 1) input = idProduct
// (amount -1 = 0)=> Remove product
//			  - remove Product, input = idProduct
// 4. Reducer
// 5. dispatch

// 1.initState = []
const data = JSON.parse(localStorage.getItem("cartData"));
const initCart = data ? data : [];
/*{
	idProduct:
	name :
	color: ???
	Size :
	amount: => can change
	price : 

}*/

// 2. Action :

// - add

function cartReducer(state, action) {
	/*
	state = []
	action{
		type: action,
		payload: {
			id : idProduct,
			amount: amount,
		}
		
	}
	*/
	let newState = [];
	const id = action.payload.idProduct;
	const product = action.payload;

	switch (action.type) {
		case "add_Product":
			{
				const amount = action.payload.amount;
				const size = action.payload.size;
				if (state.length === 0) {
					newState = [product];
				} else if (
					state.some(
						(element) =>
							element.idProduct === id && element.size === size,
					)
				) {
					newState = state.map((element) => {
						if (element.idProduct === id) {
							return {
								...element,
								amount: element.amount + amount,
							};
						} else {
							return {
								...element,
							};
						}
					});
					// newState = [...state];
				} else {
					newState = [...state, product];
				}
			}
			break;
		case "change_amount":
			{
				const amount = action.payload.amount;
				newState = state.map((element) =>
					element.idProduct === id
						? { ...element, amount: amount }
						: element,
				);
			}
			break;
		case "change_size":
			{
				const size = action.payload.size;
				newState = state.map((element) =>
					element.idProduct === id
						? { ...element, size: size }
						: element,
				);
			}
			break;
		case "remove_product":
			{
				const size = action.payload.size;
				newState = state.filter(
					(element) =>
						element.idProduct !== id && element.size !== size,
				);
			}
			break;
		default:
			throw new Error("invalid action");
	}
	localStorage.setItem("cartData", JSON.stringify(newState));
	return newState;
}

export { initCart, cartReducer };
