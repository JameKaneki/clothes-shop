import clsx from "clsx";
import style from "./register.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../component/input/input";
import google from "../../acsset/img/Group 38.png";
import facebook from "../../acsset/img/Group 39.png";
import {
	userName_Validation,
	password_Validation,
	email_Validation,
	re_Password_Validation,
} from "../../FormUtils/inputValidation";

// useForm() => là 1 react hook
/*	
	defaultValue = {
		name : "Minh",
		email : "Choitaosao1999@gmail.com"
		password  : "asdasd"
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(defaultValue);
	nhận vào 3 đối số là :
	1 - handleSubmit : sử lý sự kiện submit cho vào thẻ form bao ở ngoài, lấy dữ liệu form và trả về cho register render
	2 - register("id-name" ,  register function ) xem them ở link này : "https://react-hook-form.com/api/useform/register/"
	3 - formState => khi submit form thì gọi register => handleSubmit => hứng error tại formState (trả ra kiểu arrayList)
		=> mỗi phần tử cảu giá trị trả về gồm : { type : <Tên lỗi>, message: "thư gửi về", ref : "cai nay k rõ"} 

*/
function Register() {
	const methods = useForm();
	const navigate = useNavigate();

	const postData = async (data) => {
		const response = await fetch("http://localhost:8088/user", {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json",

				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		});

		// khi nào be xong nhớ check lại chỗ này

		if (response.status === 201) {
			if (window.confirm("success")) navigate("/");
		} else {
			methods.setError("email", {
				type: "has use",
				message: "email has been used",
			});
		}
	};

	const onSubmit = methods.handleSubmit((data) => {
		postData(data);
	});

	return (
		<div className={clsx(style.registerWrap)}>
			<div className={clsx(style.banner)}>
				<img
					className=""
					src="https://res.cloudinary.com/dwohqjquz/image/upload/v1679375140/City_Banking_app/IMG_1767_joejb3.jpg"
					alt="#"
				/>
			</div>
			{/* from react  */}

			<div className={clsx(style.from)}>
				<h1 className="">Register</h1>

				<FormProvider {...methods}>
					<form className="" onSubmit={(e) => e.preventDefault()}>
						<Input {...userName_Validation} />
						<Input {...email_Validation} />
						<Input {...password_Validation} />
						<Input {...re_Password_Validation} />

						<div>
							<button
								// type="submit"
								onClick={onSubmit}
								className={clsx(style.addBtn)}>
								REGISTER
							</button>
						</div>
					</form>
				</FormProvider>

				<div className={clsx(style.registerWith)}>
					<p>Or login width</p>
					<button>
						<img src={google} alt="$" />
					</button>
					<button>
						<img src={facebook} alt="$" />
					</button>

					<h3>
						Already have an account ?{" "}
						<Link
							to="/Login"
							className={clsx(style.colorBlue, style.fontBold)}>
							Sign up
						</Link>
					</h3>
				</div>
			</div>
		</div>
	);
}
export default Register;
