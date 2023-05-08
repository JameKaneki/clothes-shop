import clsx from "clsx";
import style from "./product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import TheSameProduct from "../../component/theSameProduct/TheSameProduct";

// a custom hooks
import { useCartData } from "../../Context/Contexthooks";

const productInit = {
	idProduct: 2,
	nameProduct: "Jujutsukaiden T shirt",
	title: "Basic T-shirt for your daily activity.simple, comfortable material, and ecofriendly",
	price: 50000,
	category: "MEN",
	categoryItem: "T_SHIRT",
	image: "https://res.cloudinary.com/dwohqjquz/image/upload/v1682014947/clothes-shop/short_vintage_T_shirt_jozi07.jpg",
	quantity: 50000,
	sizeList: ["S", "M", "L", "XL"],
	color: "",
};

function Product() {
	const [amount, setAmount] = useState(1);
	const [sizeState, setSize] = useState("S");

	// useState , useEffect to get product INfo
	const location = useLocation();
	const [productInfo, setProductInfo] = useState(productInit);
	const [cartState, cartDispatch] = useCartData();

	// get id from location and call api to get product info
	const { id } = location.state;
	// console.log(id);
	useEffect(() => {
		//url = "Link?id=" + id;
		// fetch(url)
		fetch("http://localhost:5000/Products") /// ?
			.then((res) => res.json())
			.then((result) => {
				result.forEach((element) => {
					if (element.idProduct === id) {
						setProductInfo(element);
					}
				});
			});
	}, []);

	// dispatch  add
	const addToCart = () => {
		cartDispatch({
			type: "add_Product",
			payload: {
				...productInfo,
				size: sizeState,
				amount: amount,
			},
		});
		// add action hear
	};

	return (
		<div className={clsx(style.productWrap)}>
			<div className={clsx(style.product)}>
				<div className={clsx(style.productImg)}>
					<img src={productInfo.image} alt="#" />
				</div>
				<div className={clsx(style.productInfo)}>
					<h2>{productInfo.nameProduct}</h2>
					<p>{productInfo.title}</p>
					<h4>Size</h4>
					<div className={clsx(style.productSize)}>
						{productInfo.sizeList.map((item, index) => {
							return (
								<button
									className={clsx({
										[style.active]: item === sizeState,
									})}
									onClick={() => setSize(item)}
									key={index}>
									{item}
								</button>
							);
						})}
					</div>
					<h4>Amount</h4>
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
							<FontAwesomeIcon icon={faMinus} />
						</button>
						<p>{amount}</p>
						<button onClick={() => setAmount((pev) => (pev += 1))}>
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</div>
					<h3>{productInfo.price} đ</h3>
					<div>
						<button className={clsx(style.redButton)}>
							BUY NOW
						</button>
						<button
							className={clsx(style.redButton)}
							onClick={() => addToCart()}>
							ADD TO CART
						</button>
					</div>
				</div>
			</div>
			<TheSameProduct />
		</div>
	);
}

export default Product;
