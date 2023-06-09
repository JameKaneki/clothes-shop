import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Product from "../pages/product/Product";
import Register from "../pages/register/Register";
import Cart from "../pages/cart/Cart";

const publicRoutes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/Product/:idProduct",
		component: Product,
	},
	{
		path: "/Register",
		component: Register,
		layout: null,
	},
	{
		path: "/Login",
		component: Login,
		layout: null,
	},
	{
		path: "/Cart",
		component: Cart,
		layout: null,
	},
];

const privateRoutes = [
	{
		path: "/admin",
	},
	{
		path: "/admin/ProductsManegement"
	},
	{
		patc: "/admin/ProductsManegement/add"
	},
	{
		patc: "/admin/ProductsManegement/update"
	},
	{
		patc: "/admin/ProductsManegement/delete"
	},
	{
		path: "/admin/UsersManegement"
	}
];

export { publicRoutes, privateRoutes };
