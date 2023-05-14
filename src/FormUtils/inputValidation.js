const userName_Validation = {
	name: "userName",
	label: "UserName",
	id: "userName",
	type: "text",
	placeholder: "Enter your userName",
	validation: {
		required: {
			value: true,
			message: "required",
		},
		minLength: {
			value: 6,
			message: "min length is 6",
		},
		maxLength: {
			value: 30,
			message: "max length is 30",
		},
	},
};

const email_Validation = {
	name: "email",
	label: "Email",
	id: "email",
	type: "email",
	placeholder: "Enter your email",
	validation: {
		required: {
			value: true,
			message: "required",
		},
		pattern: {
			value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: "Email not Valid",
		},
	},
};

const password_Validation = {
	name: "password",
	label: "Password",
	id: "password",
	type: "password",
	placeholder: "Enter your Password",
	validation: {
		required: {
			value: true,
			message: "required",
		},
		minLength: {
			value: 6,
			message: "min Length is 6",
		},
		maxLength: {
			value: 30,
			message: "max Length is 30",
		},
		// pattern: {
		// 	value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/,
		// 	message: "Need an Uppercase ",
		// },
	},
};
const re_Password_Validation = {
	name: "re-password",
	label: "Re-Password",
	id: "re-password",
	type: "password",
	placeholder: "re-Password",
	validation: {
		required: {
			value: true,
			message: "required",
		},
	},
};

const userName_Login = {
	name: "userName",
	label: "UserName",
	id: "userName",
	type: "text",
	placeholder: "Enter your userName",
	validation: {
		required: {
			value: true,
			message: "required",
		},
	},
};

const password_Login = {
	name: "password",
	label: "Password",
	id: "password",
	type: "password",
	placeholder: "Enter your Password",
	validation: {
		required: {
			value: true,
			message: "required",
		},
	},
};
export {
	userName_Validation,
	email_Validation,
	password_Validation,
	re_Password_Validation,
	userName_Login,password_Login
};
