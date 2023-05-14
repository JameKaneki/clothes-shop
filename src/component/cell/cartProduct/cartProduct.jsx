import clsx from "clsx";
import style from "./cartProduct.module.scss";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useCartData } from "../../../Context/Contexthooks";

// const prop = {
// 	idProduct: 2,
// 	nameProduct: "Jujutsukaiden T shirt",
// 	description:
// 		"Basic T-shirt for your daily activity.simple, comfortable material, and ecofriendly",
// 	price: 50000,
// 	category: "MEN",
// 	categoryItem: "T_SHIRT",
// 	image: "https://res.cloudinary.com/dwohqjquz/image/upload/v1682014947/clothes-shop/short_vintage_T_shirt_jozi07.jpg",
// 	quantity: 50000,
// 	sizeList: ["S", "M", "L", "XL"],
// 	amount: 2,
// 	size: "XL",
// 	color: "",
// };

function CartProduct({ prop }) {
	const cartContext = useCartData();
	const [amountState, setAmount] = useState(prop.amount);
	const [sizeState, setSize] = useState(prop.size);
	useEffect(() => {
		cartContext[1]({
			type: "change_amount",
			payload: {
				id: prop.idProduct,
				amount: amountState,
			},
		});
	}, [amountState]);
	useEffect(() => {
		cartContext[1]({
			type: "change_size",
			payload: {
				id: prop.idProduct,
				size: sizeState,
			},
		});
	}, [sizeState]);

	const removeProduct = () => {
		cartContext[1]({
			type: "remove_product",
			payload: {
				id: prop.idProduct,
				size: prop.size,
			},
		});
	};

	return (
		<div className={clsx(style.cartProduct)}>
			<div className={clsx(style.productInfo)}>
				<Link
					to={"/Product/id" + prop.idProduct}
					state={{ id: prop.idProduct }}
					className={clsx(style.productImage)}>
					<img src={prop.image} alt="#" />
				</Link>
				<div className={clsx(style.productData)}>
					<h3>{prop.nameProduct}</h3>
					<div className={clsx(style.productSize)}>
						<div>
							<div className={clsx(style.sizeSlideButton)}>
								<p> Size : {prop.size} </p>
								<div>
									<div
										className={clsx(style.slideIcon)}></div>
								</div>
								<div className={clsx(style.sizeSlide)}>
									<h3>Size :</h3>
									<div className={style.sizeListWrap}>
										{prop.sizeList.map((item, index) => (
											<div
												key={index}
												className={clsx(
													style.sizeListItem,
													{
														[style.active]:
															item === sizeState,
													},
												)}
												onClick={() => setSize(item)}>
												{item}
											</div>
										))}
									</div>
									{/* <div className={clsx(style.sizeListSelect)}>
										<button>Trở Lại</button>
										<button className={clsx(style.active)}>
											Xác nhận
										</button>
									</div> */}
								</div>
							</div>
						</div>
					</div>
					<div className={clsx(style.price)}>
						<p>Giá : {prop.price}đ</p>
					</div>

					<div className={clsx(style.amount)}>
						<button
							onClick={() =>
								setAmount((pev) => {
									if (pev - 1 === 0) return 1;
									else {
										return (pev -= 1);
									}
								})
							}>
							<h5>-</h5>
						</button>
						<p>{amountState}</p>
						<button onClick={() => setAmount((pev) => (pev += 1))}>
							<h5>+</h5>
						</button>
					</div>
					<div className={clsx(style.description)}>
						<p>
							{prop.description.length >= 100
								? prop.description.slice(0, 100) +
								  " " +
								  "......"
								: prop.description}
						</p>
					</div>
				</div>
			</div>

			<div className={clsx(style.removeButton)}>
				<button onClick={() => removeProduct()}>
					<FontAwesomeIcon icon={faDeleteLeft} />
					<span>Remove Product </span>
				</button>
			</div>
		</div>
	);
}

export default CartProduct;
