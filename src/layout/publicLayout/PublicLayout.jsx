import Header from "../../component/header/Header";
import Nav from "../../component/nav/Nav";
import Footer from "../../component/footer/Footer";

function PublicLayout({ children }) {
	return (
		<div>
			<Header />
			<Nav />
			<div className="Container bg-slate-100">
				<div className="content">{children}</div>
			</div>
			<Footer />
		</div>
	);
}

export default PublicLayout;
