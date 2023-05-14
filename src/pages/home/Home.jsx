import clsx from "clsx";

import style from "./home.module.scss";

import Content from "../../component/content/Content";
import Sibar from "../../component/sibar/Sibar";

function Home() {
	return (
		<div className={clsx(style.home)}>
			<div className={clsx(style.sibarWrap)}>
				<Sibar />
			</div>
			<div className={clsx(style.contentWrap)}>
				<Content />
			</div>
		</div>
	);
}

export default Home;
