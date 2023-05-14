import clsx from "clsx";
import style from "./payingCheck.module.scss";
// import { useState } from "react";

function PayingCheck({ prop }) {
	return (
		<div className={clsx(style.PayingCheck)}>
			<div className={clsx(style.codePaying)}>
				<input placeholder="Enter vocher code" />
				<button className={clsx(style.redbutton)}>APPLY</button>
			</div>
			<div className={clsx(style.totalPaying)}>
				<h3>Shopping sumary :</h3>
				<div className={clsx(style.tableWrap)}>
					<div className={clsx(style.table)}>
						<div>
							<p>Total price :</p>
						</div>
						<div>
							<p>5000 đ</p>
						</div>
					</div>
					<div className={clsx(style.table)}>
						<div>
							<p>Shopping cost :</p>
						</div>
						<div>
							<p>3000 đ</p>
						</div>
					</div>
				</div>
			</div>
			<div className={clsx(style.total)}>
				<div className={clsx(style.table)}>
					<div>
						<h3>Total :</h3>
					</div>
					<div>
						<h3>abc đ</h3>
					</div>
				</div>
			</div>
			<div className={clsx(style.payButton)}>
				<button className={clsx(style.redbutton)}>PAYMENT</button>
			</div>
		</div>
	);
}

export default PayingCheck;
