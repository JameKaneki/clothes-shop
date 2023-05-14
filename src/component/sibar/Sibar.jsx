import clsx from "clsx";
import style from "./sibar.module.scss";

const category = ["T-shirt", "Shirt", "Polo Shirt", "Outerwear", "Paints"];
function Sibar() {
	return (
		<div className={clsx(style.sibar)}>
			<div className={clsx(style.category)}>
				<h2>Category</h2>
				<div>
					{category.map((item, index) => {
						return (
							<div key={index} className={clsx(style.inputWrap)}>
								<input type="checkbox" value={item} />
								<span>{item}</span>
							</div>
						);
					})}
				</div>
			</div>
			<div>
				<h2>Price</h2>
				<p>select by price</p>
			</div>
		</div>
	);
}

export default Sibar;
