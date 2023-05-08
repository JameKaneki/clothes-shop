import { Link } from "react-router-dom";
import clsx from "clsx";
import { useState, useEffect } from "react";
// import { useProduct } from "../../Context";

import style from "./content.module.scss";

const initpdList = [
	{
		idProduct: 1,
		nameProduct: "Jujutsukaiden T shirt",
		price: 50000,
		category: "MEN",
		categoryItem: "T_SHIRT",
		image: "https://res.cloudinary.com/dwohqjquz/image/upload/v1682014947/clothes-shop/Jujutsikaisen-shirt_jcqfhy.jpg",
		quantity: 50000,
	},
	{
		idProduct: 2,
		nameProduct: "Jujutsukaiden T shirt",
		price: 50000,
		category: "MEN",
		categoryItem: "T_SHIRT",
		image: "https://res.cloudinary.com/dwohqjquz/image/upload/v1682014947/clothes-shop/short_vintage_T_shirt_jozi07.jpg",
		quantity: 50000,
	},
];

function Content() {
	const [pdList, setPdList] = useState(initpdList);
	useEffect(() => {
		fetch("http://localhost:5000/Products")
			.then((res) => res.json())
			.then((result) => {
				return setPdList(result);
			})
			.catch((e) => {
				console.log(e);
				return e;
			});
	}, []);
	return (
		<div>
			<div className={clsx(style.productList)}>
				{pdList.map((product, index) => {
					const url = "/Product/id=" + product.idProduct;

					return (
						<Link
							to={url}
							key={index}
							className={style.product}
							state={{ id: product.idProduct }}>
							<div className={clsx(style.productImg)}>
								<img src={product.image} alt="#" />
							</div>
							<div className={clsx(style.productInfo)}>
								<div className={clsx(style.productName)}>
									<span>{product.nameProduct}</span>
								</div>
								<div className={clsx(style.productPrice)}>
									<span>{product.price}</span>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Content;
