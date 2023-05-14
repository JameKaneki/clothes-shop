import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

function LoggedLayout({ children }) {
	return (
		<div>
			<Header />
			<div className="container bg-slate-100">{children}</div>
			<Footer />
		</div>
	);
}

export default LoggedLayout;
